export interface YoutubeVideoData {
    snippet: videoSnippet;
    contentDetails: videoContentDetails;
}

interface videoContentDetails {
    duration: string; //length
}

interface videoSnippet {
    channelTitle: string; //author
    publishedAt: Date; //date
    title: string; //title
    thumbnails: object;
}