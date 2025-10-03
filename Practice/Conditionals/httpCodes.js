const statusCode = document.getElementById("statusCodeInput")
const btn = document.getElementById("checkButton")
const resultArea = document.getElementById("result")
const codeTitle = document.getElementById("codeTitle")
const codeDescription = document.getElementById("codeDescription")
const codeDetails = document.getElementById("codeDetails")

const statusCodes = {
    // 1xx: Informational
    '100': {
        title: 'Continue',
        description: 'The server has received the request headers and the client should proceed to send the request body.',
        details: 'This is an interim response to inform the client that the initial part of the request has been received and it can continue with the rest of the request.'
    },
    '101': {
        title: 'Switching Protocols',
        description: 'The requester has asked the server to switch protocols and the server has agreed to do so.',
        details: 'The server is switching to a different protocol, such as changing from HTTP/1.1 to WebSocket, in response to a client\'s "Upgrade" request header.'
    },
    '102': {
        title: 'Processing',
        description: 'The server has received and is processing the request, but no response is yet available.',
        details: 'This is an interim response used with WebDAV. It prevents the client from timing out while the server is still working on a long-running request.'
    },
    '103': {
        title: 'Early Hints',
        description: 'Used to return some response headers before final HTTP response is available.',
        details: 'This is an experimental status code that allows a server to send a preliminary HTTP response with hints about resources that the client can start preloading.'
    },

    // 2xx: Success
    '200': {
        title: 'OK',
        description: 'The request has succeeded.',
        details: 'This is the most common and successful status code. It indicates that the server has successfully processed the request and is returning the requested data.'
    },
    '201': {
        title: 'Created',
        description: 'The request has been fulfilled and a new resource has been created.',
        details: 'This is typically returned after a successful POST or PUT request, confirming that a new resource has been successfully created on the server.'
    },
    '202': {
        title: 'Accepted',
        description: 'The request has been accepted for processing, but the processing has not been completed.',
        details: 'This is useful for asynchronous processing. The request might or might not be eventually acted upon, and there is no way for the server to send an asynchronous response about the outcome.'
    },
    '203': {
        title: 'Non-Authoritative Information',
        description: 'The server is a transforming proxy and received a 200 OK from its origin, but is returning a modified version of the origin\'s response.',
        details: 'This indicates that the content has been served from a proxy that has transformed the content from the original server.'
    },
    '204': {
        title: 'No Content',
        description: 'The server successfully processed the request, but is not returning any content.',
        details: 'This is useful for update requests where the client does not need to navigate away from the current page. The browser will not refresh the view.'
    },
    '205': {
        title: 'Reset Content',
        description: 'The server successfully processed the request, but is not returning any content and requires the user agent to reset the document view.',
        details: 'This is often used for forms to clear the form fields after the submission is successful.'
    },
    '206': {
        title: 'Partial Content',
        description: 'The server is delivering only part of the resource due to a range header sent by the client.',
        details: 'This is commonly used by download managers or media players to resume interrupted downloads or play specific parts of a video without downloading the whole thing.'
    },
    '207': {
        title: 'Multi-Status',
        description: 'Conveys information about multiple resources for which multiple status codes might be appropriate.',
        details: 'A WebDAV (Web Distributed Authoring and Versioning) extension, used when a single operation might affect multiple resources.'
    },
    '208': {
        title: 'Already Reported',
        description: 'The members of a DAV binding have already been enumerated in a preceding part of the response.',
        details: 'Used inside a `<dav:propstat>` element in a DAV multi-status response to avoid repeatedly enumerating the internal members of multiple bindings.'
    },
    '226': {
        title: 'IM Used',
        description: 'The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.',
        details: 'Used to indicate that the response contains an instance-manipulated representation of the resource.'
    },

    // 3xx: Redirection
    '300': {
        title: 'Multiple Choices',
        description: 'Indicates multiple options for the resource from which the client may choose.',
        details: 'The server can offer different representations of a resource, for example, multiple file formats or language versions. The server or user-agent must select one.'
    },
    '301': {
        title: 'Moved Permanently',
        description: 'The requested resource has been assigned a new permanent URI.',
        details: 'This is a permanent redirect. Search engines and browsers will update their stored link to the new URI. All future requests should use the new address.'
    },
    '302': {
        title: 'Found',
        description: 'The requested resource resides temporarily at a different URI.',
        details: 'This is a temporary redirect. The browser will continue to use the original URI for future requests. Search engines will not update their links.'
    },
    '303': {
        title: 'See Other',
        description: 'The response to the request can be found under another URI using the GET method.',
        details: 'This is commonly used after a POST request to prevent the user from re-submitting the form if they hit the back button. It forces the browser to make a new GET request.'
    },
    '304': {
        title: 'Not Modified',
        description: 'Indicates that the resource has not been modified since the version specified by the request headers.',
        details: 'This is used for caching. It tells the browser that the cached version of the page is still fresh, and there is no need to re-download it from the server.'
    },
    '305': {
        title: 'Use Proxy',
        description: 'The requested resource must be accessed through the proxy given by the Location field.',
        details: 'This is a deprecated status code due to security concerns and should not be used in modern applications.'
    },
    '307': {
        title: 'Temporary Redirect',
        description: 'The requested resource resides temporarily under a different URI.',
        details: 'This is similar to a 302, but it explicitly forbids changing the HTTP method (e.g., from POST to GET) during the redirect.'
    },
    '308': {
        title: 'Permanent Redirect',
        description: 'The requested resource has been assigned a new permanent URI and all future requests should use the new URI.',
        details: 'This is similar to a 301, but it explicitly forbids changing the HTTP method (e.g., from POST to GET) during the redirect.'
    },

    // 4xx: Client Error
    '400': {
        title: 'Bad Request',
        description: 'The server cannot or will not process the request due to a client error.',
        details: 'This is a general error indicating a malformed request, such as incorrect syntax, invalid request parameters, or a failed validation.'
    },
    '401': {
        title: 'Unauthorized',
        description: 'The client must authenticate itself to get the requested response.',
        details: 'This error is sent when a user tries to access a protected resource without valid credentials or an authentication token.'
    },
    '402': {
        title: 'Payment Required',
        description: 'This code is reserved for future use for digital payment systems and is not currently implemented.',
        details: 'It was originally created for a digital payment system, but it is not widely used or standardized today.'
    },
    '403': {
        title: 'Forbidden',
        description: 'The server understood the request but refuses to authorize it.',
        details: 'This is a permission error. The client may have authenticated, but they are not authorized to access the requested resource.'
    },
    '404': {
        title: 'Not Found',
        description: 'The server cannot find the requested resource.',
        details: 'This is a classic error. It means the URL is either wrong or the resource has been moved or deleted. The server is running, but the specific page or file is not there.'
    },
    '405': {
        title: 'Method Not Allowed',
        description: 'The request method is not supported for the requested resource.',
        details: 'For example, if you send a POST request to an endpoint that only accepts GET requests, you will get this error.'
    },
    '406': {
        title: 'Not Acceptable',
        description: 'The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.',
        details: 'This means the server cannot produce a response that matches the content types (like `application/json` or `text/html`) specified in the client\'s request.'
    },
    '407': {
        title: 'Proxy Authentication Required',
        description: 'The client must first authenticate itself with the proxy.',
        details: 'This is similar to 401 Unauthorized but is specific to a proxy server that requires authentication.'
    },
    '408': {
        title: 'Request Timeout',
        description: 'The server timed out waiting for the request.',
        details: 'This can occur if the client takes too long to send its full request to the server. The client can resend the request later without modification.'
    },
    '409': {
        title: 'Conflict',
        description: 'The request could not be completed due to a conflict with the current state of the resource.',
        details: 'This is often used in PUT requests to prevent updates that would overwrite a resource that has been modified since the client last retrieved it.'
    },
    '410': {
        title: 'Gone',
        description: 'The requested resource is no longer available at the server and no forwarding address is known.',
        details: 'This is similar to 404 Not Found, but it indicates that the resource was intentionally removed and is not coming back. Clients should not make future requests for the resource.'
    },
    '411': {
        title: 'Length Required',
        description: 'The server rejects the request because the Content-Length header field is not defined and the server requires it.',
        details: 'This is an error for requests that require a body, such as POST or PUT, but do not specify the size of the body.'
    },
    '412': {
        title: 'Precondition Failed',
        description: 'The server does not meet one of the preconditions that the client specified in the request headers.',
        details: 'Used for conditional requests. For example, a client requests an update to a resource, but the resource on the server has changed since the client last saw it.'
    },
    '413': {
        title: 'Payload Too Large',
        description: 'The request payload is larger than the server is willing or able to process.',
        details: 'This can happen if a client tries to upload a file that exceeds the server\'s maximum upload size limit.'
    },
    '414': {
        title: 'URI Too Long',
        description: 'The URI provided was too long for the server to process.',
        details: 'This is a rare error that typically occurs with excessively long query strings in a GET request.'
    },
    '415': {
        title: 'Unsupported Media Type',
        description: 'The server will not accept the request because the media type of the payload is not supported.',
        details: 'This occurs if you try to send data in a format (e.g., `image/jpeg`) that the server is not configured to accept for that specific endpoint.'
    },
    '416': {
        title: 'Range Not Satisfiable',
        description: 'The range specified in the request\'s Range header field cannot be satisfied.',
        details: 'This is usually a result of a client trying to download a portion of a file that is outside the bounds of the file itself.'
    },
    '417': {
        title: 'Expectation Failed',
        description: 'The expectation given in the request\'s Expect header could not be met by the server.',
        details: 'This error occurs when the server is unable to meet the requirements of the `Expect` header, often due to an unsupported feature or a proxy issue.'
    },
    '418': {
        title: "I'm a Teapot",
        description: 'This is a humoristic status code. Any attempt to brew coffee with a teapot should result in this status code.',
        details: 'Part of the "Hyper Text Coffee Pot Control Protocol" (HTCPCP/1.0), this code is not intended to be implemented by HTTP servers.'
    },
    '421': {
        title: 'Misdirected Request',
        description: 'The request was directed at a server that is not able to produce a response.',
        details: 'This is a relatively new status code used in HTTP/2. It can happen when the client requests a resource from a server that is not configured to serve that domain or resource.'
    },
    '422': {
        title: 'Unprocessable Content',
        description: 'The server understands the content type of the request entity, but was unable to process the contained instructions.',
        details: 'This is a common API error. The request is syntactically correct, but the data is semantically flawed, such as a missing required field.'
    },
    '423': {
        title: 'Locked',
        description: 'The resource that is being accessed is locked.',
        details: 'A WebDAV extension, used when a resource is temporarily locked and cannot be modified.'
    },
    '424': {
        title: 'Failed Dependency',
        description: 'The request failed because it was dependent on another request which also failed.',
        details: 'A WebDAV extension, used when a request, such as a multi-status response, fails because one of the dependent requests failed.'
    },
    '425': {
        title: 'Too Early',
        description: 'Indicates that the server is unwilling to risk processing a request that might be replayed.',
        details: 'This is a newer status code used to prevent replay attacks, often in the context of TLS early data.'
    },
    '426': {
        title: 'Upgrade Required',
        description: 'The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.',
        details: 'The server requires the client to switch to a newer version of the protocol, like HTTP/2, usually with an `Upgrade` header.'
    },
    '428': {
        title: 'Precondition Required',
        description: 'The server requires the request to be conditional.',
        details: 'This prevents the "lost update" problem, ensuring that a client doesn\'t update a resource that has changed since it was last retrieved.'
    },
    '429': {
        title: 'Too Many Requests',
        description: 'The user has sent too many requests in a given amount of time ("rate limiting").',
        details: 'This is used by APIs and servers to limit the number of requests from a single client within a specific time frame.'
    },
    '431': {
        title: 'Request Header Fields Too Large',
        description: 'The server is unwilling to process the request because its header fields are too large.',
        details: 'This can happen if you send too many cookies or a very long URI in your request headers.'
    },
    '451': {
        title: 'Unavailable For Legal Reasons',
        description: 'The server is denying access to the resource as a consequence of a legal demand.',
        details: 'This is an official HTTP status code inspired by the novel "Fahrenheit 451" to indicate censorship or a resource being unavailable due to legal restrictions.'
    },

    // 5xx: Server Error
    '500': {
        title: 'Internal Server Error',
        description: 'The server encountered an unexpected condition that prevented it from fulfilling the request.',
        details: 'This is a generic error from the server side. It indicates that something went wrong on the server itself, not with the client\'s request.'
    },
    '501': {
        title: 'Not Implemented',
        description: 'The server does not support the functionality required to fulfill the request.',
        details: 'This means the server cannot handle the request method (e.g., PUT) for a specific endpoint.'
    },
    '502': {
        title: 'Bad Gateway',
        description: 'The server, while acting as a gateway or proxy, received an invalid response from an upstream server.',
        details: 'This error is often seen when one web server communicates with another, and the upstream server sends an invalid response.'
    },
    '503': {
        title: 'Service Unavailable',
        description: 'The server is not ready to handle the request. Common causes are a server that is down for maintenance or is overloaded.',
        details: 'This is a temporary condition. The response may include a `Retry-After` header to inform the client when to try again.'
    },
    '504': {
        title: 'Gateway Timeout',
        description: 'The server, while acting as a gateway or proxy, did not get a response from an upstream server in time.',
        details: 'Similar to a 502, but this specifically indicates a timeout issue between the two servers.'
    },
    '505': {
        title: 'HTTP Version Not Supported',
        description: 'The HTTP version used in the request is not supported by the server.',
        details: 'This error is very rare in modern web development.'
    },
    '506': {
        title: 'Variant Also Negotiates',
        description: 'The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.',
        details: 'An unusual error used in `transparent content negotiation` to prevent a circular reference.'
    },
    '507': {
        title: 'Insufficient Storage',
        description: 'The server is unable to store the representation needed to complete the request.',
        details: 'A WebDAV extension, indicating that the server does not have enough space to save the content.'
    },
    '508': {
        title: 'Loop Detected',
        description: 'The server detected an infinite loop while processing the request.',
        details: 'A WebDAV extension, used to prevent an infinite redirection or resource dependency loop.'
    },
    '510': {
        title: 'Not Extended',
        description: 'The server requires further extensions to the request to fulfill it.',
        details: 'This status code is not widely implemented and has been made obsolete in modern HTTP standards.'
    },
    '511': {
        title: 'Network Authentication Required',
        description: 'The client needs to authenticate to gain network access.',
        details: 'This is intended for use by intercepting proxies used to control access to the network (e.g., in a public Wi-Fi hotspot).'
    }
};

btn.addEventListener('click', () =>{
    let statusCodeValue = statusCode.value;
    console.log(statusCodeValue);
    resultArea.classList.remove('active');
    codeTitle.textContent = '';
    codeDescription.textContent = '';
    codeDetails.textContent = '';


   if(!statusCodeValue){
    resultArea.classList.add("active")
    codeTitle.textContent = "ERROR"
    codeDescription.textContent ="Please enter a valid status code"
    codeDetails.textContent = ""
    return;

}

const codeInfo = statusCodes[statusCodeValue]

if(codeInfo){

    codeTitle.textContent = statusCodeValue + " - " + codeInfo.title;
    codeDescription.textContent = codeInfo.description;   
    codeDetails.textContent = codeInfo.details;
    resultArea.classList.add("active")
}else{

      resultArea.classList.remove('active');
    codeTitle.textContent = '';
    codeDescription.textContent = '';
    codeDetails.textContent = '';
}
})

