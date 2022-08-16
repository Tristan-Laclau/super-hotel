package com.fms.hotel;


import com.fms.hotel.entities.City;
import com.fms.hotel.entities.Hotel;
import com.fms.hotel.repository.service.HotelServiceImpl;
import com.fms.hotel.repository.service.CityServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HotelApplication implements CommandLineRunner {

	@Autowired
	CityServiceImpl cityService;

	@Autowired
	HotelServiceImpl hotelService;

	public static void main(String[] args) {
		SpringApplication.run(HotelApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		City bayonne = this.cityService.add(new City(null,"Bayonne","France",null));
		City bilbao = this.cityService.add(new City(null,"Bilbao","Spain",null));
		City baiamare = this.cityService.add(new City(null,"Baia Mare","Romania",null));
		City newyork = this.cityService.add(new City(null,"New-York","USA",null));
		City london = this.cityService.add(new City(null,"London","England",null));
		City paris = this.cityService.add(new City(null,"Paris","France",null));

		this.hotelService.addHotel(new Hotel(null,"La cruche percée","0610203040","14 Boulevard de la gare","5 stars",100,170,null,bayonne));
		this.hotelService.addHotel(new Hotel(null,"La casa de papel","0690807060","90 Calle fuerte","2 stars",40,20,null,bilbao));
		this.hotelService.addHotel(new Hotel(null,"Fromuosa","06403958212","23 Dragostit","3 stars",70,23,null,baiamare));
		this.hotelService.addHotel(new Hotel(null,"Cowboy's rest","555 666 333","432 Burger Street","4 stars",980,99.99,null,newyork));
		this.hotelService.addHotel(new Hotel(null,"Gentleman & Cie","55904339","20 Baker Street","5 stars",3,100,null,london));
		this.hotelService.addHotel(new Hotel(null,"Amour, gloire et beauté","0613204496","Ici c'est Paris","5 stars",41,1199.99,null,paris));
	}
}
