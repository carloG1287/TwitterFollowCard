import { useState } from 'react'
export function TwitterFollowCard ({ children ,username}) {
    const [isFollowing,setisFollowing] = useState(false)
    const Text = isFollowing ? 'Siguiendo' : 'seguir'
    const Buttonclassname = isFollowing ? 'tw-card-Button is-following' : 'tw-card-Button'
    const handleClick = () => {
        setisFollowing(!isFollowing)
    }

    return (
        <article className="tw-card-article"> 
        <header className="tw-card-header">
          <img className="tw-card-img" alt="Avatar lulu" src={'https://unavatar.io/${username}'} />
          <div className="tw-card-div">
            <strong >{children}</strong>
            <span className="tw-card-inforUserName">@{username}</span>
          </div>
        </header>
        
      <aside>
        <button className={Buttonclassname} onClick={handleClick}>
          {Text}
        </button>
      </aside>
  
      </article>
    )
}