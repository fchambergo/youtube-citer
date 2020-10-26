export class YoutubeVideoData {
    snippet: videoSnippet;
    contentDetails: videoContentDetails;
    link: string; //url link
    lastAccessed: Date; //date last accessed
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