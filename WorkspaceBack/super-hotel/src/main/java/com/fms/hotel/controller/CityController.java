package com.fms.hotel.controller;

import com.fms.hotel.entities.City;
import com.fms.hotel.repository.service.CityServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/city")
public class CityController {

    @Autowired
    private CityServiceImpl cityService;

    /**
     * Add a new city
     *
     * @param city
     */
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public City add(@RequestBody City city) {
      return  cityService.add(city);
    }

    /**
     * Update a city by id
     *
     * @param id
     * @param city
     */
    @PutMapping("/update/{id}")
    public void update(@PathVariable("id") long id, @RequestBody City city) {
        City cityToUpdate = cityService.getOneById(id);
        cityToUpdate.setName(city.getName());
        cityToUpdate.setCountry(city.getCountry());
        cityService.add(cityToUpdate);
    }

    /**
     * Delete city by id
     *
     * @param id
     */
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable("id") long id) {
        cityService.delete(id);
    }

    /**
     * Return a city by id
     *
     * @param id
     * @return
     */
    @GetMapping("/get/{id}")
    public City getOne(@PathVariable("id") long id) {
        return cityService.getOneById(id);
    }

    /**
     * Return list of all cities
     * @return
     */
    @GetMapping("/all")
    public List<City> getAll() {
        return cityService.getAll();
    }
}
