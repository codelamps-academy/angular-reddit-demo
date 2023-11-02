
export class Article {
  title : string;
  link : string;
  votes : number;

  // create constructor
  constructor(title : string, link : string, votes? : number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  // function voteUp
  voteUp() : void {
    this.votes += 1;
  }

  // function voteDown
  voteDown() : void {
    this.votes -= 1;
  }

  domain() : string | null {
    try {
      // e.g http://foo.com/path/to/bar
      const domainAndPath : string = this.link.split('//')[1];
      // e.g foo.com/path/to/bar
      return domainAndPath.split('/')[0];
    } catch (err){
      return null;
    }
  }

}
