package com.datingsite.dating.Models;

public class UploadResponse {
    private String id;
    private String fileName;
    private  String fileType;
    private  Long size;
    private  byte[] data;

    public UploadResponse(String id, String fileName, String fileType, Long size) {
        this.id = id;
        this.fileName = fileName;
        this.fileType = fileType;
        this.size = size;
        this.data = data;
    }

    public String getId() {
        return id;
    }

    public UploadResponse setId(String id) {
        this.id = id;
        return this;
    }

    public String getFileName() {
        return fileName;
    }

    public UploadResponse setFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }

    public String getFileType() {
        return fileType;
    }

    public UploadResponse setFileType(String fileType) {
        this.fileType = fileType;
        return this;
    }

    public Long getSize() {
        return size;
    }

    public UploadResponse setSize(Long size) {
        this.size = size;
        return this;
    }

    public byte[] getData() {
        return data;
    }

    public UploadResponse setData(byte[] data) {
        this.data = data;
        return this;
    }
}
