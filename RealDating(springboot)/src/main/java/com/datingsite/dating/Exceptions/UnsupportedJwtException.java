package com.datingsite.dating.Exceptions;

public class UnsupportedJwtException  extends  RuntimeException{
    public  UnsupportedJwtException(String message){
        super(message);
    }

    public UnsupportedJwtException(String message, Throwable cause){
        super(message, cause);
    }
}
