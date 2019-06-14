package com.datingsite.dating.Entities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name="uploadedImages")
public class ImagesEntity {
    @Id
  @GeneratedValue(generator = "uuid")
    @GenericGenerator(name="uuid",strategy="uuid2")
    private String id;
    private String fileName;
    private  String fileType;

    @Lob
    private  byte[] data;

    public ImagesEntity() {
    }

    public ImagesEntity(String fileName, String fileType, byte[] data) {
        this.fileName = fileName;
        this.fileType = fileType;
        this.data = data;
    }

    public String getId() {
        return id;
    }

    public ImagesEntity setId(String id) {
        this.id = id;
        return this;
    }

    public String getFileName() {
        return fileName;
    }

    public ImagesEntity setFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }

    public String getFileType() {
        return fileType;
    }

    public ImagesEntity setFileType(String fileType) {
        this.fileType = fileType;
        return this;
    }

    public byte[] getData() {
        return data;
    }

    public ImagesEntity setData(byte[] data) {
        this.data = data;
        return this;
    }
}
