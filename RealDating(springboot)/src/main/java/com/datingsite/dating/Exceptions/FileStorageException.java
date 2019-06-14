package com.datingsite.dating.Exceptions;


//thrown when unexpected situation occurs while storing a file in the file system

public class FileStorageException extends  RuntimeException{

    public FileStorageException(String message){
        super(message);
    }

    public FileStorageException(String message, Throwable cause){
        super(message, cause);
    }
}
