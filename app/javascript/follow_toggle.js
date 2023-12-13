import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    this.toggleButton = toggleButton;
    // Your code here
    this.toggleButton.addEventListener('click', this.handleClick.bind(this))
    this.followState = toggleButton.dataset.followState
    console.log(toggleButton.dataset)
  }

  

  async handleClick(event) {
    // Your code here
    event.preventDefault();

    if (this.followState === 'followed') {
      this.unfollow();
    } else {
      this.follow();
    }
    console.log(this.followState);
  }

  async follow() {
    // Your code here
  }

  async unfollow() {
    // Your code here
  }

  render() {
    switch (this.followState) {
      // Your code here
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}