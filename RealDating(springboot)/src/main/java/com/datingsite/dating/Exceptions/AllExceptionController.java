package com.datingsite.dating.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


//handling global exceptions

@Component
@ControllerAdvice
public class AllExceptionController {
    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> exc(Exception e){
        return new ResponseEntity<Object>("Error occured", HttpStatus.NOT_FOUND);
    }

}
