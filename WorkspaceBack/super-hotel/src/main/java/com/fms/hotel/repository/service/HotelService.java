package com.fms.hotel.repository.service;

import com.fms.hotel.entities.Hotel;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface HotelService {

    public Hotel addHotel(Hotel hotel);
    public List<Hotel> getAllHotels();

    public Optional<Hotel> getHotelById(long id);

    public void deleteHotelById(long id);

    public List<Hotel> getHotelByKeyWord(String keyWord);

    public List<Hotel> getHotelByCityId(Long id);

}
