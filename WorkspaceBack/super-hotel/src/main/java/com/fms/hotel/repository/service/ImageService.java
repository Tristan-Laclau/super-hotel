package com.fms.hotel.repository.service;

import com.fms.hotel.entities.Image;

public interface ImageService {

    public Image saveImage(Image image);
    public Image getImageByName(String name);
}
