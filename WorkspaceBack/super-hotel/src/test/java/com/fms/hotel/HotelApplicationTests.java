package com.fms.hotel;

import com.fms.hotel.entities.City;
import com.fms.hotel.repository.service.CityServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
class HotelApplicationTests {

    @Autowired
    CityServiceImpl cityService;

    @Test
    void contextLoads() {
        assertFalse(1 == 2);
    }

    @Test
    void testAddCity() {
        City city = new City(1234567890L, "Montpellier", "France");

        try {
            cityService.add(city);
            assertEquals(cityService.getOneById(1234567890L), city);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    void testGetCityNotNull() {
        try {
            assertThat(cityService.getOneById(1)).isNotNull();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    void testGetCityNull() {
        try {
            assertThat(cityService.getOneById(100)).isNull();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


//    @Test
//    void testGetCity() {
//		City city = new City(null, "Montpellier", 34);
//        cityService.add(city);
//        assertEquals("Montpellier", cityService.getOneById(city.getId()).getName());
//    }

}
