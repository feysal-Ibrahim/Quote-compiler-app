export class Quote {
  public showDetails: boolean;
    constructor (public quote: string,
      public author: string,
      public upVotes: number,
      public downVotes: number,
      public dateCreated: Date )  {}
}
