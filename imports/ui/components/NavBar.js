import React from 'react';
import { NavLink } from 'reactstrap';
import { LinkContainer } from "react-router-bootstrap";

import Image from './Image';

export default (props) => {

  const profile = props.profile;
  const title = props.title;
  const customStatus = profile.customStatus ? profile.customStatus : '...';

  const changeCustomStatus = (e) => {
    e.preventDefault();
    const newCustomStatus = document.getElementById("customStatus").value;
    Meteor.call('profile.update.customStatus', profile._id, newCustomStatus);
  }

  return (

    <div>

      <header className="header" id="site-header">

        <div className="page-title">
          <h6>{title}</h6>
        </div>

        <div className="header-content-wrapper">
          <form className="search-bar w-search notification-list friend-requests">
            <div className="form-group with-button">
              <input className="form-control js-user-search" placeholder="Søk etter folk..." type="text" />
              <button>
                <svg className="olymp-magnifying-glass-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use></svg>
              </button>
            </div>
          </form>

          <LinkContainer to="/members">
            <NavLink className="link-find-friend">Finn folk</NavLink>
          </LinkContainer>

          <LinkContainer to={`/profile/${profile._id}`}>
            <NavLink className="link-find-friend">Min profil</NavLink>
          </LinkContainer>

          <LinkContainer to={"/chat"}>
            <NavLink className="link-find-friend">Chat</NavLink>
          </LinkContainer>

          <div className="control-block">

            <div className="control-icon more has-items">
              <svg className="olymp-happy-face-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
              <div className="label-avatar bg-blue">6</div>

              <div className="more-dropdown more-with-triangle triangle-top-center">
                <div className="ui-block-title ui-block-title-small">
                  <h6 className="title">FRIEND REQUESTS</h6>
                  <a href="#">Find Friends</a>
                  <a href="#">Settings</a>
                </div>

                <div className="mCustomScrollbar" data-mcs-theme="dark">
                  <ul className="notification-list friend-requests">
                    <li>
                      <div className="author-thumb">
                        <img src="/theme/img/avatar55-sm.jpg" alt="author" />
                      </div>
                      <div className="notification-event">
                        <a href="#" className="h6 notification-friend">Tamara Romanoff</a>
                        <span className="chat-message-item">Mutual Friend: Sarah Hetfield</span>
                      </div>
                      <span className="notification-icon">
                        <a href="#" className="accept-request">
                          <span className="icon-add without-text">
                            <svg className="olymp-happy-face-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                          </span>
                        </a>

                        <a href="#" className="accept-request request-del">
                          <span className="icon-minus">
                            <svg className="olymp-happy-face-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                          </span>
                        </a>

                      </span>

                      <div className="more">
                        <svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                      </div>
                    </li>

                    <li>
                      <div className="author-thumb">
                        <img src="/theme/img/avatar56-sm.jpg" alt="author" />
                      </div>
                      <div className="notification-event">
                        <a href="#" className="h6 notification-friend">Tony Stevens</a>
                        <span className="chat-message-item">4 Friends in Common</span>
                      </div>
                      <span className="notification-icon">
                        <a href="#" className="accept-request">
                          <span className="icon-add without-text">
                            <svg className="olymp-happy-face-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                          </span>
                        </a>

                        <a href="#" className="accept-request request-del">
                          <span className="icon-minus">
                            <svg className="olymp-happy-face-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                          </span>
                        </a>

                      </span>

                      <div className="more">
                        <svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                      </div>
                    </li>

                    <li className="accepted">
                      <div className="author-thumb">
                        <img src="/theme/img/avatar57-sm.jpg" alt="author" />
                      </div>
                      <div className="notification-event">
                        You and <a href="#" className="h6 notification-friend">Mary Jane Stark</a> just became friends. Write on <a href="#" className="notification-link">her wall</a>.
                      </div>
                      <span className="notification-icon">
                        <svg className="olymp-happy-face-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                      </span>

                      <div className="more">
                        <svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                        <svg className="olymp-little-delete"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                      </div>
                    </li>

                    <li>
                      <div className="author-thumb">
                        <img src="/theme/img/avatar58-sm.jpg" alt="author" />
                      </div>
                      <div className="notification-event">
                        <a href="#" className="h6 notification-friend">Stagg Clothing</a>
                        <span className="chat-message-item">9 Friends in Common</span>
                      </div>
                      <span className="notification-icon">
                        <a href="#" className="accept-request">
                          <span className="icon-add without-text">
                            <svg className="olymp-happy-face-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                          </span>
                        </a>

                        <a href="#" className="accept-request request-del">
                          <span className="icon-minus">
                            <svg className="olymp-happy-face-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                          </span>
                        </a>

                      </span>

                      <div className="more">
                        <svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                      </div>
                    </li>

                  </ul>
                </div>

                <a href="#" className="view-all bg-blue">Check all your Events</a>
              </div>
            </div>

            <div className="control-icon more has-items">
              <svg className="olymp-chat---messages-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
              <div className="label-avatar bg-purple">2</div>

              <div className="more-dropdown more-with-triangle triangle-top-center">
                <div className="ui-block-title ui-block-title-small">
                  <h6 className="title">Chat / Messages</h6>
                  <a href="#">Mark all as read</a>
                  <a href="#">Settings</a>
                </div>

                <div className="mCustomScrollbar" data-mcs-theme="dark">
                  <ul className="notification-list chat-message">
                    <li className="message-unread">
                      <div className="author-thumb">
                        <img src="/theme/img/avatar59-sm.jpg" alt="author" />
                      </div>
                      <div className="notification-event">
                        <a href="#" className="h6 notification-friend">Diana Jameson</a>
                        <span className="chat-message-item">Hi James! It’s Diana, I just wanted to let you know that we have to reschedule...</span>
                        <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
                      </div>
                      <span className="notification-icon">
                        <svg className="olymp-chat---messages-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                      </span>
                      <div className="more">
                        <svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                      </div>
                    </li>

                    <li>
                      <div className="author-thumb">
                        <img src="/theme/img/avatar60-sm.jpg" alt="author" />
                      </div>
                      <div className="notification-event">
                        <a href="#" className="h6 notification-friend">Jake Parker</a>
                        <span className="chat-message-item">Great, I’ll see you tomorrow!.</span>
                        <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
                      </div>
                      <span className="notification-icon">
                        <svg className="olymp-chat---messages-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                      </span>

                      <div className="more">
                        <svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                      </div>
                    </li>
                    <li>
                      <div className="author-thumb">
                        <img src="/theme/img/avatar61-sm.jpg" alt="author" />
                      </div>
                      <div className="notification-event">
                        <a href="#" className="h6 notification-friend">Elaine Dreyfuss</a>
                        <span className="chat-message-item">We’ll have to check that at the office and see if the client is on board with...</span>
                        <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 9:56pm</time></span>
                      </div>
                        <span className="notification-icon">
                          <svg className="olymp-chat---messages-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                        </span>
                      <div className="more">
                        <svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                      </div>
                    </li>

                    <li className="chat-group">
                      <div className="author-thumb">
                        <img src="/theme/img/avatar11-sm.jpg" alt="author" />
                        <img src="/theme/img/avatar12-sm.jpg" alt="author" />
                        <img src="/theme/img/avatar13-sm.jpg" alt="author" />
                        <img src="/theme/img/avatar10-sm.jpg" alt="author" />
                      </div>
                      <div className="notification-event">
                        <a href="#" className="h6 notification-friend">You, Faye, Ed &amp; Jet +3</a>
                        <span className="last-message-author">Ed:</span>
                        <span className="chat-message-item">Yeah! Seems fine by me!</span>
                        <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 16th at 10:23am</time></span>
                      </div>
                        <span className="notification-icon">
                          <svg className="olymp-chat---messages-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                        </span>
                      <div className="more">
                        <svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                      </div>
                    </li>
                  </ul>
                </div>

                <a href="#" className="view-all bg-purple">View All Messages</a>
              </div>
            </div>

            <div className="control-icon more has-items">
              <svg className="olymp-thunder-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-thunder-icon"></use></svg>

              <div className="label-avatar bg-primary">8</div>

              <div className="more-dropdown more-with-triangle triangle-top-center">
                <div className="ui-block-title ui-block-title-small">
                  <h6 className="title">Notifications</h6>
                  <a href="#">Mark all as read</a>
                  <a href="#">Settings</a>
                </div>

                <div className="mCustomScrollbar" data-mcs-theme="dark">
                  <ul className="notification-list">
                    <li>
                      <div className="author-thumb">
                        <img src="/theme/img/avatar62-sm.jpg" alt="author" />
                      </div>
                      <div className="notification-event">
                        <div><a href="#" className="h6 notification-friend">Mathilda Brinker</a> commented on your new <a href="#" className="notification-link">profile status</a>.</div>
                        <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
                      </div>
                        <span className="notification-icon">
                          <svg className="olymp-comments-post-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
                        </span>

                      <div className="more">
                        <svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                        <svg className="olymp-little-delete"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                      </div>
                    </li>

                    <li className="un-read">
                      <div className="author-thumb">
                        <img src="/theme/img/avatar63-sm.jpg" alt="author" />
                      </div>
                      <div className="notification-event">
                        <div>You and <a href="#" className="h6 notification-friend">Nicholas Grissom</a> just became friends. Write on <a href="#" className="notification-link">his wall</a>.</div>
                        <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">9 hours ago</time></span>
                      </div>
                        <span className="notification-icon">
                          <svg className="olymp-happy-face-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                        </span>

                      <div className="more">
                        <svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                        <svg className="olymp-little-delete"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                      </div>
                    </li>

                    <li className="with-comment-photo">
                      <div className="author-thumb">
                        <img src="/theme/img/avatar64-sm.jpg" alt="author" />
                      </div>
                      <div className="notification-event">
                        <div><a href="#" className="h6 notification-friend">Sarah Hetfield</a> commented on your <a href="#" className="notification-link">photo</a>.</div>
                        <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 5:32am</time></span>
                      </div>
                        <span className="notification-icon">
                          <svg className="olymp-comments-post-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
                        </span>

                      <div className="comment-photo">
                        <img src="/theme/img/comment-photo1.jpg" alt="photo" />
                        <span>“She looks incredible in that outfit! We should see each...”</span>
                      </div>

                      <div className="more">
                        <svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                        <svg className="olymp-little-delete"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                      </div>
                    </li>

                    <li>
                      <div className="author-thumb">
                        <img src="/theme/img/avatar65-sm.jpg" alt="author" />
                      </div>
                      <div className="notification-event">
                        <div><a href="#" className="h6 notification-friend">Green Goo Rock</a> invited you to attend to his event Goo in <a href="#" className="notification-link">Gotham Bar</a>.</div>
                        <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 5th at 6:43pm</time></span>
                      </div>
                        <span className="notification-icon">
                          <svg className="olymp-happy-face-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                        </span>

                      <div className="more">
                        <svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                        <svg className="olymp-little-delete"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                      </div>
                    </li>

                    <li>
                      <div className="author-thumb">
                        <img src="/theme/img/avatar66-sm.jpg" alt="author" />
                      </div>
                      <div className="notification-event">
                        <div><a href="#" className="h6 notification-friend">James Summers</a> commented on your new <a href="#" className="notification-link">profile status</a>.</div>
                        <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 2nd at 8:29pm</time></span>
                      </div>
                        <span className="notification-icon">
                          <svg className="olymp-heart-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>
                        </span>

                      <div className="more">
                        <svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                        <svg className="olymp-little-delete"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                      </div>
                    </li>
                  </ul>
                </div>

                <a href="#" className="view-all bg-primary">View All Notifications</a>
              </div>
            </div>

            <div className="author-page author vcard inline-items more">
              <div className="author-thumb">

                <Image id={profile.profileImage} size="36x36" className="avatar" alt="author" />

                <span className="icon-status online"></span>
                <div className="more-dropdown more-with-triangle">
                  <div className="mCustomScrollbar" data-mcs-theme="dark">
                    <div className="ui-block-title ui-block-title-small">
                      <h6 className="title">Din konto</h6>
                    </div>

                    <ul className="account-settings">
                      <li>
                        <a href="29-YourAccount-AccountSettings.html">

                          <svg className="olymp-menu-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-menu-icon"></use></svg>

                          <span>Profilinstillinger</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => props.logout()}>
                          <svg className="olymp-logout-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-logout-icon"></use></svg>
                          <span>Logg ut</span>
                        </a>
                      </li>
                    </ul>

                    <div className="ui-block-title ui-block-title-small">
                      <h6 className="title">Chatinstillinger</h6>
                    </div>

                    <ul className="chat-settings">
                      <li>
                        <a href="#">
                          <span className="icon-status online"></span>
                          <span>Pålogget</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-status away"></span>
                          <span>Borte</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-status disconected"></span>
                          <span>Frakoplet</span>
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <span className="icon-status status-invisible"></span>
                          <span>Usynlig</span>
                        </a>
                      </li>
                    </ul>

                    <div className="ui-block-title ui-block-title-small">
                      <h6 className="title">Din status</h6>
                    </div>

                    <form className="form-group with-button custom-status">
                      <input className="form-control" placeholder="" type="text" id="customStatus" defaultValue={customStatus} />

                      <button className="bg-purple" onClick={(e) => changeCustomStatus(e)} >
                        <svg className="olymp-check-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-check-icon"></use></svg>
                      </button>
                    </form>

                    <div className="ui-block-title ui-block-title-small">
                      <h6 className="title">Om Skalbare</h6>
                    </div>

                    <ul>
                      <li>
                        <a href="#">
                          <span>Brukervilkår</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>Ofte stilte spørsmål</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>Kontakt</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
              <a href="02-ProfilePage.html" className="author-name fn">
                <div className="author-title">
                  {profile.nickName} <svg className="olymp-dropdown-arrow-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use></svg>
                </div>
                <span className="author-subtitle">{profile.customStatus}</span>
              </a>
            </div>

          </div>
        </div>

      </header>

      { 
        // RESPONSIVE HEADER STARTING HERE
      }

      <header className="header header-responsive" id="site-header-responsive">

        <div className="header-content-wrapper">
          <ul className="nav nav-tabs mobile-app-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#request" role="tab">
                <div className="control-icon has-items">
                  <svg className="olymp-happy-face-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                  <div className="label-avatar bg-blue">6</div>
                </div>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#chat" role="tab">
                <div className="control-icon has-items">
                  <svg className="olymp-chat---messages-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                  <div className="label-avatar bg-purple">2</div>
                </div>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#notification" role="tab">
                <div className="control-icon has-items">
                  <svg className="olymp-thunder-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-thunder-icon"></use></svg>
                  <div className="label-avatar bg-primary">8</div>
                </div>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#search" role="tab">
                <svg className="olymp-magnifying-glass-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use></svg>
                <svg className="olymp-close-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="tab-content tab-content-responsive">

          <div className="tab-pane " id="request" role="tabpanel">

            <div className="mCustomScrollbar" data-mcs-theme="dark">
              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">FRIEND REQUESTS</h6>
                <a href="#">Find Friends</a>
                <a href="#">Settings</a>
              </div>
              <ul className="notification-list friend-requests">
                <li>
                  <div className="author-thumb">
                    <img src="/theme/img/avatar55-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <a href="#" className="h6 notification-friend">Tamara Romanoff</a>
                    <span className="chat-message-item">Mutual Friend: Sarah Hetfield</span>
                  </div>
                        <span className="notification-icon">
                          <a href="#" className="accept-request">
                            <span className="icon-add without-text">
                              <svg className="olymp-happy-face-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                            </span>
                          </a>

                          <a href="#" className="accept-request request-del">
                            <span className="icon-minus">
                              <svg className="olymp-happy-face-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                            </span>
                          </a>

                        </span>

                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                  </div>
                </li>
                <li>
                  <div className="author-thumb">
                    <img src="/theme/img/avatar56-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <a href="#" className="h6 notification-friend">Tony Stevens</a>
                    <span className="chat-message-item">4 Friends in Common</span>
                  </div>
                        <span className="notification-icon">
                          <a href="#" className="accept-request">
                            <span className="icon-add without-text">
                              <svg className="olymp-happy-face-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                            </span>
                          </a>

                          <a href="#" className="accept-request request-del">
                            <span className="icon-minus">
                              <svg className="olymp-happy-face-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                            </span>
                          </a>

                        </span>

                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                  </div>
                </li>
                <li className="accepted">
                  <div className="author-thumb">
                    <img src="/theme/img/avatar57-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    You and <a href="#" className="h6 notification-friend">Mary Jane Stark</a> just became friends. Write on <a href="#" className="notification-link">her wall</a>.
                  </div>
                        <span className="notification-icon">
                          <svg className="olymp-happy-face-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                        </span>

                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                    <svg className="olymp-little-delete"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                  </div>
                </li>
                <li>
                  <div className="author-thumb">
                    <img src="/theme/img/avatar58-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <a href="#" className="h6 notification-friend">Stagg Clothing</a>
                    <span className="chat-message-item">9 Friends in Common</span>
                  </div>
                        <span className="notification-icon">
                          <a href="#" className="accept-request">
                            <span className="icon-add without-text">
                              <svg className="olymp-happy-face-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                            </span>
                          </a>

                          <a href="#" className="accept-request request-del">
                            <span className="icon-minus">
                              <svg className="olymp-happy-face-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                            </span>
                          </a>

                        </span>

                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                  </div>
                </li>
              </ul>
              <a href="#" className="view-all bg-blue">Check all your Events</a>
            </div>

          </div>

          <div className="tab-pane " id="chat" role="tabpanel">

            <div className="mCustomScrollbar" data-mcs-theme="dark">
              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">Chat / Messages</h6>
                <a href="#">Mark all as read</a>
                <a href="#">Settings</a>
              </div>

              <ul className="notification-list chat-message">
                <li className="message-unread">
                  <div className="author-thumb">
                    <img src="/theme/img/avatar59-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <a href="#" className="h6 notification-friend">Diana Jameson</a>
                    <span className="chat-message-item">Hi James! It’s Diana, I just wanted to let you know that we have to reschedule...</span>
                    <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
                  </div>
                        <span className="notification-icon">
                          <svg className="olymp-chat---messages-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                        </span>
                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                  </div>
                </li>

                <li>
                  <div className="author-thumb">
                    <img src="/theme/img/avatar60-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <a href="#" className="h6 notification-friend">Jake Parker</a>
                    <span className="chat-message-item">Great, I’ll see you tomorrow!.</span>
                    <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
                  </div>
                        <span className="notification-icon">
                          <svg className="olymp-chat---messages-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                        </span>

                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                  </div>
                </li>
                <li>
                  <div className="author-thumb">
                    <img src="/theme/img/avatar61-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <a href="#" className="h6 notification-friend">Elaine Dreyfuss</a>
                    <span className="chat-message-item">We’ll have to check that at the office and see if the client is on board with...</span>
                    <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 9:56pm</time></span>
                  </div>
                          <span className="notification-icon">
                            <svg className="olymp-chat---messages-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                          </span>
                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                  </div>
                </li>

                <li className="chat-group">
                  <div className="author-thumb">
                    <img src="/theme/img/avatar11-sm.jpg" alt="author" />
                    <img src="/theme/img/avatar12-sm.jpg" alt="author" />
                    <img src="/theme/img/avatar13-sm.jpg" alt="author" />
                    <img src="/theme/img/avatar10-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <a href="#" className="h6 notification-friend">You, Faye, Ed &amp; Jet +3</a>
                    <span className="last-message-author">Ed:</span>
                    <span className="chat-message-item">Yeah! Seems fine by me!</span>
                    <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 16th at 10:23am</time></span>
                  </div>
                          <span className="notification-icon">
                            <svg className="olymp-chat---messages-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                          </span>
                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                  </div>
                </li>
              </ul>

              <a href="#" className="view-all bg-purple">View All Messages</a>
            </div>

          </div>

          <div className="tab-pane " id="notification" role="tabpanel">

            <div className="mCustomScrollbar" data-mcs-theme="dark">
              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">Notifications</h6>
                <a href="#">Mark all as read</a>
                <a href="#">Settings</a>
              </div>

              <ul className="notification-list">
                <li>
                  <div className="author-thumb">
                    <img src="/theme/img/avatar62-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <div><a href="#" className="h6 notification-friend">Mathilda Brinker</a> commented on your new <a href="#" className="notification-link">profile status</a>.</div>
                    <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
                  </div>
                          <span className="notification-icon">
                            <svg className="olymp-comments-post-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
                          </span>

                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                    <svg className="olymp-little-delete"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                  </div>
                </li>

                <li className="un-read">
                  <div className="author-thumb">
                    <img src="/theme/img/avatar63-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <div>You and <a href="#" className="h6 notification-friend">Nicholas Grissom</a> just became friends. Write on <a href="#" className="notification-link">his wall</a>.</div>
                    <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">9 hours ago</time></span>
                  </div>
                          <span className="notification-icon">
                            <svg className="olymp-happy-face-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                          </span>

                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                    <svg className="olymp-little-delete"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                  </div>
                </li>

                <li className="with-comment-photo">
                  <div className="author-thumb">
                    <img src="/theme/img/avatar64-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <div><a href="#" className="h6 notification-friend">Sarah Hetfield</a> commented on your <a href="#" className="notification-link">photo</a>.</div>
                    <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 5:32am</time></span>
                  </div>
                          <span className="notification-icon">
                            <svg className="olymp-comments-post-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
                          </span>

                  <div className="comment-photo">
                    <img src="/theme/img/comment-photo1.jpg" alt="photo" />
                    <span>“She looks incredible in that outfit! We should see each...”</span>
                  </div>

                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                    <svg className="olymp-little-delete"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                  </div>
                </li>

                <li>
                  <div className="author-thumb">
                    <img src="/theme/img/avatar65-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <div><a href="#" className="h6 notification-friend">Green Goo Rock</a> invited you to attend to his event Goo in <a href="#" className="notification-link">Gotham Bar</a>.</div>
                    <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 5th at 6:43pm</time></span>
                  </div>
                          <span className="notification-icon">
                            <svg className="olymp-happy-face-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                          </span>

                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                    <svg className="olymp-little-delete"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                  </div>
                </li>

                <li>
                  <div className="author-thumb">
                    <img src="/theme/img/avatar66-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <div><a href="#" className="h6 notification-friend">James Summers</a> commented on your new <a href="#" className="notification-link">profile status</a>.</div>
                    <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 2nd at 8:29pm</time></span>
                  </div>
                          <span className="notification-icon">
                            <svg className="olymp-heart-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>
                          </span>

                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                    <svg className="olymp-little-delete"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                  </div>
                </li>
              </ul>

              <a href="#" className="view-all bg-primary">View All Notifications</a>
            </div>

          </div>

          <div className="tab-pane " id="search" role="tabpanel">


              <form className="search-bar w-search notification-list friend-requests">
                <div className="form-group with-button">
                  <input className="form-control js-user-search" placeholder="Søk etter folk..." type="text" />
                </div>
              </form>


          </div>
        </div>
      </header>
    </div>
  );
}
