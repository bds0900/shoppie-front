import React, { ReactElement } from 'react'

interface Props {
    
}
interface Link{
    sns:string;
    url:string;
    tag:string;

}

const share:Link[]=[
    {sns:"twitter",url:"https://twitter.com/home?status=",tag:"tweet"},
    {sns:"facebook",url:"https://www.facebook.com/sharer/sharer.php?u=",tag:"share"},
    {sns:"linkedin",url:"https://www.linkedin.com/shareArticle?mini=true&url=",tag:"share"}
]
export default function Share({}: Props): ReactElement {
    
    return (
        <div className="share-link-container">
        <ul>
            {share.map(item=>(
                <li key={item.sns} className="share-link-item">
                <a 
                href={`${item.url}${window.location.href}`} 
                target="_blank" 
                className={`fa ${item.sns}`}>
                    <i className={`fa-${item.sns}`}></i>
                    <span >{item.tag}</span>
                </a>
                </li>
            ))}
        </ul>
        </div>
    )
}
