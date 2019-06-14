package com.datingsite.dating.Exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


// thrown when a file being downloaded is not found

@ResponseStatus( HttpStatus.NOT_FOUND)
public class MyFileNotFoundException extends  RuntimeException {

   public  MyFileNotFoundException(String message){
        super(message);
   }

   public MyFileNotFoundException(String message, Throwable cause){
       super(message, cause);
   }

}
