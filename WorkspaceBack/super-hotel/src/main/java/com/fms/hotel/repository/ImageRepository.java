package com.fms.hotel.repository;

import com.fms.hotel.entities.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {
    public Image findByName(String name);
}
