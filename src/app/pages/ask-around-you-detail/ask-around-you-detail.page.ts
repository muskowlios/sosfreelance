import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IonContent, IonItemSliding } from "@ionic/angular";
import { BehaviorSubject, SubscriptionLike } from "rxjs";
import { debounceTime, tap } from "rxjs/operators";
import { FormControl, Validators } from "@angular/forms";
export interface CurrentUserInterface {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  image: string;
  last_message: string;
}

@Component({
  selector: "app-ask-around-you-detail",
  templateUrl: "./ask-around-you-detail.page.html",
  styleUrls: ["./ask-around-you-detail.page.scss"],
})
export class AskAroundYouDetailPage implements OnInit, OnDestroy {
  userId = null;
  user: CurrentUserInterface;
  chats: any[] = [
    {
      date: "Sunday",
      chats: [
        {
          message:
            "Nostrum illo qui deserunt ab deserunt libero ullam sunt. Iure ut molestiae. Assumenda error laborum dolorem molestiae molestiae quis.",
          date: "2020-12-23T16:16:49.233Z",
          first_name: "Ms.",
          last_name: "Kshlerin",
          avatar:
          "https://pbs.twimg.com/profile_images/1208875577735729153/rlzgJfpu_400x400.jpg",
          type: "me",
        },
        {
          message:
            "Rerum aut maiores voluptates voluptas. Fugit minima sint quisquam dolores dolorum et. Pariatur sed laborum cum sint quibusdam iste omnis.",
          date: "2020-12-23T17:12:53.614Z",
          first_name: "Nicholas",
          last_name: "Schuppe",
          avatar:
          "https://pbs.twimg.com/profile_images/1208875577735729153/rlzgJfpu_400x400.jpg",
          type: "me",
        },
        {
          message:
            "Excepturi rerum laboriosam libero nesciunt id facilis voluptas in. Quo vitae quia est dignissimos incidunt voluptatibus eos nostrum placeat. Tempore nemo reiciendis eligendi odit laudantium.",
          date: "2020-12-23T12:19:55.232Z",
          first_name: "Lula",
          last_name: "Price",
          avatar:
          "https://pbs.twimg.com/profile_images/1208875577735729153/rlzgJfpu_400x400.jpg",
          type: "user",
        },
        {
          message:
            "Delectus sit possimus unde voluptatem repellat suscipit velit quaerat nesciunt. Tempore reiciendis aut facere. Atque id vero.",
          date: "2020-12-23T15:41:06.775Z",
          first_name: "Pamela",
          last_name: "Cole",
          avatar:
          "https://pbs.twimg.com/profile_images/1208875577735729153/rlzgJfpu_400x400.jpg",
          type: "me",
        },
        {
          message: "Aut alias illum cumque ut omnis et quia.",
          date: "2020-12-24T02:10:16.338Z",
          first_name: "Eunice",
          last_name: "Rath",
          avatar:
          "https://pbs.twimg.com/profile_images/1208875577735729153/rlzgJfpu_400x400.jpg",
          type: "user",
        },
      ],
    },
    {
      date: "Sunday",
      chats: [
        {
          message: "Porro repellendus eaque cupiditate.",
          date: "2020-12-23T22:13:37.665Z",
          first_name: "Tom",
          last_name: "Kessler",
          avatar:
          "https://pbs.twimg.com/profile_images/1208875577735729153/rlzgJfpu_400x400.jpg",
          type: "me",
        },
        {
          message:
            "Nesciunt voluptates cupiditate sed dolore adipisci optio aut possimus. Occaecati voluptatem tempora placeat officia numquam consectetur ea soluta.",
          date: "2020-12-23T13:30:38.353Z",
          first_name: "Hilda",
          last_name: "Daugherty",
          avatar:
          "https://pbs.twimg.com/profile_images/1208875577735729153/rlzgJfpu_400x400.jpg",
          type: "me",
        },
        {
          message: "Vel id eum minus ut nemo autem fugiat qui.",
          date: "2020-12-23T14:37:28.832Z",
          first_name: "Lisa",
          last_name: "Farrell",
          avatar:
          "https://pbs.twimg.com/profile_images/1208875577735729153/rlzgJfpu_400x400.jpg",
          type: "user",
        },
        {
          message:
            "Ab delectus numquam et ea voluptatibus enim. Est ratione eos qui.",
          date: "2020-12-23T17:13:49.740Z",
          first_name: "Felicia",
          last_name: "Yost",
          avatar:
          "https://pbs.twimg.com/profile_images/1208875577735729153/rlzgJfpu_400x400.jpg",
          type: "user",
        },
        {
          message:
            "Qui error in aspernatur unde aut fugit dolor consequuntur est. Doloribus ipsa praesentium consequatur ipsam in. Facere iusto tenetur quia soluta et dignissimos velit.",
          date: "2020-12-24T03:29:03.385Z",
          first_name: "Roderick",
          last_name: "Rath",
          avatar:
          "https://pbs.twimg.com/profile_images/1208875577735729153/rlzgJfpu_400x400.jpg",
          type: "me",
        },
      ],
    },
    {
      date: "Saturday",
      chats: [
        {
          message:
            "Ex quibusdam officia alias neque sunt maxime repellendus. Quo adipisci non dolorum esse voluptas. Ut quaerat magnam.",
          date: "2020-12-23T16:33:39.201Z",
          first_name: "Alonzo",
          last_name: "Romaguera",
          avatar:
          "https://pbs.twimg.com/profile_images/1208875577735729153/rlzgJfpu_400x400.jpg",
          type: "user",
        },
        {
          message: "Id expedita illo libero. Dicta quo cumque.",
          date: "2020-12-24T03:39:47.153Z",
          first_name: "Beth",
          last_name: "Lehner",
          avatar:
          "https://pbs.twimg.com/profile_images/1208875577735729153/rlzgJfpu_400x400.jpg",
          type: "me",
        },
        {
          message:
            "Fuga dolore quos molestiae id perferendis ut aspernatur ut. Ut ipsam qui eos et beatae nulla. Rerum rerum sint et doloremque sit.",
          date: "2020-12-23T15:29:40.676Z",
          first_name: "Priscilla",
          last_name: "Daniel",
          avatar:
          "https://pbs.twimg.com/profile_images/1208875577735729153/rlzgJfpu_400x400.jpg",
          type: "me",
        },
        {
          message:
            "Et inventore voluptas ea id alias similique voluptas consequatur. Nihil ea minus sunt.",
          date: "2020-12-23T14:59:23.193Z",
          first_name: "Lydia",
          last_name: "Mills",
          avatar:
          "https://pbs.twimg.com/profile_images/1208875577735729153/rlzgJfpu_400x400.jpg",
          type: "me",
        },
        {
          message: "Praesentium ipsam expedita quasi maiores dolorum.",
          date: "2020-12-23T11:08:57.491Z",
          first_name: "Deborah",
          last_name: "Conn",
          avatar:
          "https://pbs.twimg.com/profile_images/1208875577735729153/rlzgJfpu_400x400.jpg",
          type: "user",
        },
      ],
    },
    {
      date: "Tuesday",
      chats: [
        {
          message:
            "Et sunt quia ut blanditiis veniam quis est. Reprehenderit voluptates eveniet iure voluptatem sed expedita suscipit.",
          date: "2020-12-23T13:03:38.468Z",
          first_name: "Theresa",
          last_name: "Kub",
          avatar:
          "https://pbs.twimg.com/profile_images/1208875577735729153/rlzgJfpu_400x400.jpg",
          type: "user",
        },
        {
          message:
            "Tenetur enim culpa explicabo qui. Tenetur explicabo expedita aut consectetur illum consectetur sit aut nihil. Voluptatem accusantium sit quaerat minima repudiandae nihil.",
          date: "2020-12-23T22:49:34.502Z",
          first_name: "Bob",
          last_name: "Champlin",
          avatar:
          "https://pbs.twimg.com/profile_images/1208875577735729153/rlzgJfpu_400x400.jpg",
          type: "me",
        },
        {
          message:
            "Velit rem repellendus laborum non laudantium dolor eum est. Et ea aliquid enim animi non.",
          date: "2020-12-24T05:08:55.074Z",
          first_name: "Leona",
          last_name: "Ankunding",
          avatar:
          "https://pbs.twimg.com/profile_images/1208875577735729153/rlzgJfpu_400x400.jpg",
          type: "me",
        },
        {
          message:
            "Non rerum sunt odio atque est ut. Accusantium deleniti eaque temporibus fugit est qui est quia. Consectetur assumenda officia.",
          date: "2020-12-24T03:41:49.665Z",
          first_name: "Mario",
          last_name: "Jaskolski",
          avatar:
          "https://pbs.twimg.com/profile_images/1208875577735729153/rlzgJfpu_400x400.jpg",
          type: "me",
        },
        {
          message: "Voluptates quos vel est dolorem.",
          date: "2020-12-23T16:24:25.138Z",
          first_name: "Wilson",
          last_name: "Padberg",
          avatar:
          "https://pbs.twimg.com/profile_images/1208875577735729153/rlzgJfpu_400x400.jpg",
          type: "user",
        },
        { message: "dfyrth", date: "2020-12-24T11:05:13.902Z", type: "me" },
        {
          message:
            "Dolorum et magni velit sit ipsum nostrum molestiae ullam animi. Odit est ut magni corporis.",
          date: "2020-12-23T11:15:26.012Z",
          first_name: "Jody",
          last_name: "Marvin",
          avatar:
          "https://pbs.twimg.com/profile_images/1208875577735729153/rlzgJfpu_400x400.jpg",
          type: "user",
        },
        {
          message:
            "A commodi quo. Animi dolore quo velit provident explicabo sit facilis.",
          date: "2020-12-23T20:30:24.170Z",
          first_name: "Ms.",
          last_name: "Lind",
          avatar:
          "https://pbs.twimg.com/profile_images/1208875577735729153/rlzgJfpu_400x400.jpg",
          type: "user",
        },
        {
          message: "Explicabo ut sint veritatis.",
          date: "2020-12-24T02:27:47.488Z",
          first_name: "Kent",
          last_name: "Schuster",
          avatar:
          "https://pbs.twimg.com/profile_images/1208875577735729153/rlzgJfpu_400x400.jpg",
          type: "user",
        },
        { message: "fgjr", date: "2020-12-24T11:05:27.422Z", type: "me" },
      ],
    },
  ];

  messageControl: FormControl = new FormControl("", [Validators.required]);

  pageScrolling = false;
  isAllowScroll = true;
  scrolling: BehaviorSubject<boolean> = new BehaviorSubject(false);

  subscriptions: SubscriptionLike[] = [];
  @ViewChild(IonContent) private content: IonContent;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.userId = params.id;
    });
  }

  /**
   * Content scroll start
   */
  logScrollStart() {
    this.scrolling.next(true);
  }

  /**
   * Content scrolling
   */
  logScrolling(event) {
    // console.log('Scrolling');
  }

  /**
   * Content scroll end
   */
  logScrollEnd() {
    this.scrolling.next(false);
  }

  /**
   * Reply message (drag)
   * @param {Event} event - drag event
   * @param {IonItemSliding} slidingItem - item sliding directive
   */
  messageDraged(event, slidingItem: IonItemSliding) {
    if (event.detail.ratio === 1) {
      slidingItem.closeOpened();
    }
  }

  /**
   * Send message
   */
  sendMessage(event) {
    event.preventDefault();

    // add message
    this.chats[this.chats.length - 1].chats.push({
      message: this.messageControl.value,
      date: new Date(),
      type: "me",
    });

    // clear input
    this.messageControl.setValue("");
    // scroll to bottom
    setTimeout(() => {
      this.content.scrollToBottom(0);
    });
  }

  ngOnInit(): void {
    // subscribe to scrolling event
    this.subscriptions.push(
      this.scrolling
        .pipe(
          tap((scrol) => {
            if (scrol) {
              this.pageScrolling = scrol;
            }
          }),
          debounceTime(400)
        )
        .subscribe((res) => {
          this.pageScrolling = res;
        })
    );
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.content.scrollToBottom(0);
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    this.subscriptions = [];
  }
}
