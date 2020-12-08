import React from 'react';

export default props => (
  <div className="row marketing">
    <div className="col-lg-12">
      <div id="bookmarksResult">
        {
          props.bookmarks.map((bookmark, i) => (
            <div className="well" key={i}>
              <h3>
                {bookmark.siteName}&nbsp;
                <a className="btn btn-default" target="_blank" href={'https://' + bookmark.siteUrl}>Visit</a>&nbsp;
                <a
                  className="btn btn-danger"
                  onClick={() => props.onRemoveBookmark(bookmark.id)}
                >Delete</a>
              </h3>
            </div>
          ))
        }
      </div>
    </div>
  </div>
)
