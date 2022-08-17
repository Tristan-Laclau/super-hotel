package com.fms.hotel.repository.service;

import com.fms.hotel.entities.Hotel;
import com.fms.hotel.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HotelServiceImpl implements HotelService {

    @Autowired
    HotelRepository hotelRepository;

    @Override
    public Hotel addHotel(Hotel hotel) {
        return hotelRepository.save(hotel);
    }

    @Override
    public List<Hotel> getAllHotels() {
        return hotelRepository.findAll();
    }

    @Override
    public Optional<Hotel> getHotelById(long id) {
        return hotelRepository.findById(id);
    }

    @Override
    public void deleteHotelById(long id) {
        hotelRepository.deleteById(id);
    }

    public List<Hotel> getHotelByKeyWord(String keyWord){ return hotelRepository.findByNameContains(keyWord);}

    public List<Hotel> getHotelByCityId(Long id){return hotelRepository.findByCityId(id);}

    public List<Hotel> getHotelByCountry(String country){ return hotelRepository.findByCityCountry(country);}
}
