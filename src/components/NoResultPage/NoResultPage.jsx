import "./NoResultPage.css";

export const NoResultPage = () => {
    return (
        <div className="no-result">
            <p><i className="large material-icons sentiment_neutral">sentiment_neutral</i></p>
            <p className="no-result-msg">We couldn't find any people matching your search</p>
        </div>
    )
    
}