package com.datingsite.dating.Services;

import com.datingsite.dating.Entities.ImagesEntity;
import com.datingsite.dating.Exceptions.AllExceptionController;
import com.datingsite.dating.Exceptions.FileStorageException;
import com.datingsite.dating.Exceptions.MyFileNotFoundException;
import com.datingsite.dating.Repositories.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class ImageService {

    @Autowired
    private ImageRepository imageRepository;

    //@Autowired
    //private  AllExceptionController allExceptionController;

    public ImagesEntity storeFile(MultipartFile file){
        //Normalize file name
        String fileName= StringUtils.cleanPath(file.getOriginalFilename());

        try{

            //check if filename contains invalid characters

            if(!(fileName.endsWith(".png")) ||!(fileName.endsWith(".jpeg")) ||!(fileName.endsWith(".jpg")) ||!(fileName.endsWith(".gif")) ||!(fileName.endsWith(".tif"))){
                //System.out.println("Sorry! Filename contains invalid path sequence " + fileName);
            //throw an exception on wrong file format that is not an image according to the image format
                throw new FileStorageException("Sorry ,File selected is not a photo file ,Try Again!!" + fileName);
            }
            ImagesEntity imagesEntity=new ImagesEntity(fileName,file.getContentType(),file.getBytes());
// save into a database
       return imageRepository.save(imagesEntity);
        }
        catch (IOException ex){
           //System.out.println (ex);
            //throw an exception when file cannot be uploaded
            throw new FileStorageException("File unable to be uploaded  !!!!" + fileName + ".Please try again",ex);
        }

//return null;

    }

    // service for retrieving the stored photos using the id field
    public ImagesEntity getFile(String fileId){
        //retrieve the file or throw an exception when it is not there
    return  imageRepository.findById(fileId).orElseThrow(() -> new MyFileNotFoundException("File not found" + fileId));
    }

}
