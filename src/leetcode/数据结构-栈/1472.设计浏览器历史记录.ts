export class BrowserHistory {
  private backStack: string[] = [];
  private forwardStack: string[] = [];
  private currUrl: string;

  constructor(homepage: string) {
    this.currUrl = homepage;
  }

  visit(url: string): void {
    this.backStack.push(this.currUrl);
    this.currUrl = url;
    this.forwardStack = [];
  }

  back(steps: number): string {
    while (steps > 0 && this.backStack.length > 0) {
      this.forwardStack.push(this.currUrl);
      this.currUrl = this.backStack.pop()!;
      steps--;
    }
    return this.currUrl;
  }

  forward(steps: number): string {
    while (steps > 0 && this.forwardStack.length > 0) {
      this.backStack.push(this.currUrl);
      this.currUrl = this.forwardStack.pop()!;
      steps--;
    }
    return this.currUrl;
  }
}
