import React from "react";

const JsonResponse = () => {
  return (
    <aside>
      <h3> Json Response</h3>
      <code>
        <pre className="json-response-code">
          {JSON.stringify(
            // prettier-ignore
            {
              error: false,
              numbers: [
              "1",
              "2",
              "3",
              "4",
              "5"
              ],
              maxPages: 4,
            },
            null,
            2
          )}
        </pre>
      </code>
    </aside>
  );
};

export default JsonResponse;
