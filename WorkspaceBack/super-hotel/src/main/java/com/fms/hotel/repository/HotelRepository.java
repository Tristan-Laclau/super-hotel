package com.fms.hotel.repository;

import com.fms.hotel.entities.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface HotelRepository extends JpaRepository<Hotel, Long> {

    List<Hotel> findByNameContains(String keyWord);
    List<Hotel> findByCityId(Long id);


}
