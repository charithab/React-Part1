/**
 * 
 *  <div id="parent">
 *      <div id="child">
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm an h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm an h2 tag</h2>
 *      </div>
 *  </div>
 * 
 * 
 * 
 */
const heading = React.createElement("h1", {id: "heading"}, "Hello World from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


/* Single child(h1) */
const secondHeading = React.createElement("div", {id: "parent"},
React.createElement("div", {id: "child"},
React.createElement("h1", {}, "I'm an h1 tag")
)
) 

// root.render(secondHeading);

/* sibling child(h1+h2) */
const secondHeadingh2 = React.createElement("div", {id: "parent"},
React.createElement("div", {id: "child"},
[React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")]
)
) 

// root.render(secondHeadingh2);

/* complex siblings(child+child2) sibling child(h1+h2) */
const secondHeadingh3 = React.createElement("div", {id: "parent"},
[React.createElement("div", {id: "child"},
[React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")]
),
React.createElement("div", {id: "child2"},
[React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")]
)
]
) 

// JSX to make our life easier

root.render(secondHeadingh3);

