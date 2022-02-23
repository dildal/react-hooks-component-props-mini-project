import React from 'react';

function emojiPicker(minutes){
    let emojiContent = `${minutes} to read`;
    console.log(minutes);
    let counter = 0;
    if(minutes < 30){
        do{
            emojiContent = `☕️${emojiContent}`;
            counter += 5;
        } while(counter < minutes)
    } else{
        do{
            emojiContent = `🍱 ${emojiContent}`;
            counter += 10;
        } while(counter < minutes)
    }
    console.log(emojiContent)
    return emojiContent;
}

function Article({
    title,
    date = "January 1, 1970",
    preview,
    minutes
}) {
    return (
        <article>
            <h3>{title}</h3>
            <small>
                {date}, {emojiPicker(minutes)}
            </small>
            <p>{preview}</p>
        </article>
    )
}

export default Article