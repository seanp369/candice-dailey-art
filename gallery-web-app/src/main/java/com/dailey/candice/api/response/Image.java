package com.dailey.candice.api.response;

public class Image {

    private final String url;
    private final String thumbUrl;
    private final String description;
    private final int order;

    public Image(String url, String thumbUrl, String description, int order) {
        this.url = url;
        this.thumbUrl = thumbUrl;
        this.description = description;
        this.order = order;
    }

    public String getUrl() {
        return url;
    }

    public String getThumbUrl() {
        return thumbUrl;
    }

    public String getDescription() {
        return description;
    }

    public int getOrder() {
        return order;
    }
}
