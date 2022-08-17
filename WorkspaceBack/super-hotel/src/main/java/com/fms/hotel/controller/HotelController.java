package com.fms.hotel.controller;

import com.fms.hotel.entities.Hotel;
import com.fms.hotel.exceptions.RecordNotFoundException;
import com.fms.hotel.repository.service.HotelServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/hotel")
public class HotelController {

    @Autowired
    private HotelServiceImpl hotelService;

    @PostMapping("/save")
    public Hotel saveHotel(@RequestBody Hotel hotel){
        System.out.println(hotel);
    return hotelService.addHotel(hotel);
    }

    @PutMapping("/update/{id}")
    public Hotel updateHotel(@PathVariable("id")long id, @RequestBody Hotel hotel){
        hotel.setId(id);
        return hotelService.addHotel(hotel);
    }

    @GetMapping("/all")
    public List<Hotel> listOfHotel(){ return hotelService.getAllHotels();}

    @DeleteMapping("/delete/{id}")
    public void deleteHotel(@PathVariable("id")long id) throws IOException{
        hotelService.deleteHotelById(id);
    }

    @GetMapping("/get/{id}")
    public Hotel getHotelById(@PathVariable("id")long id){
        return hotelService.getHotelById(id).orElseThrow(()-> new RecordNotFoundException("L'hotel d'id " + id + " n'existe pas"));
    }

    @GetMapping("/getByKeyWord/{keyWord}")
    public List<Hotel> getHotelByKeyword(@PathVariable("keyWord")String keyWord){
        return hotelService.getHotelByKeyWord(keyWord);
    }

    @GetMapping("/getByCityId/{id}")
    public List<Hotel> getHotelByCityId(@PathVariable("id")Long id){
        return hotelService.getHotelByCityId(id);
    }

    @GetMapping("/getByCountry/{country}")
    public List<Hotel> getHotelByCountry(@PathVariable("country")String country){return hotelService.getHotelByCountry(country);}
}
