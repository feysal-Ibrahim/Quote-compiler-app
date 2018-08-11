export class FormUser {
  constructor(
   public quote: string,
      public author: string,
      public upVotes: number,
      public downVotes: number,
      public dateCreated: Date ) {}
}
