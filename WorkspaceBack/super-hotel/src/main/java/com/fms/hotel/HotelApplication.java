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
		City bayonne = this.cityService.add(new City(null,"Bayonne","France","https://www.guide-du-paysbasque.com/_bibli/annonces/1283/hd/ot-bayonne-20-02.jpg",null));
		City bilbao = this.cityService.add(new City(null,"Bilbao","Spain","https://a.cdn-hotels.com/gdcs/production145/d1594/c628f660-5863-11e8-9946-0242ac110009.jpg",null));
		City baiamare = this.cityService.add(new City(null,"Baia Mare","Romania","https://content.r9cdn.net/rimg/dimg/43/db/538d36ad-city-22103-16dc8951b27.jpg?width=1200&height=630&crop=true",null));
		City newyork = this.cityService.add(new City(null,"New-York","USA","https://media.routard.com/image/28/4/new-york-aerial.1515284.w430.jpg",null));
		City london = this.cityService.add(new City(null,"London","England","https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/thames_copyright_visitlondon_antoinebuchet640x360.jpg?mw=640&hash=27AEBE2D1B7279A196CC1B4548638A9679BE107A",null));
		City paris = this.cityService.add(new City(null,"Paris","France","https://cdn.sortiraparis.com/images/80/83517/753564-visuel-paris-tour-eiffel-rue.jpg",null));



		this.hotelService.addHotel(new Hotel(null,"La cruche percée","0610203040","14 Boulevard de la gare","5 stars",100,170,"https://thumbs.dreamstime.com/b/french-country-inn-2307572.jpg",null,bayonne));
		this.hotelService.addHotel(new Hotel(null,"La casa de papel","0690807060","90 Calle fuerte","2 stars",40,20,"https://i.pinimg.com/originals/90/d7/d5/90d7d556c1a6267532c34d1574267766.png",null,bilbao));
		this.hotelService.addHotel(new Hotel(null,"Fromuosa","06403958212","23 Dragostit","3 stars",70,23,"https://th.bing.com/th/id/OIP.ZNWbHsGfhhXxMdifHktfrgHaFj?pid=ImgDet&rs=1",null,baiamare));
		this.hotelService.addHotel(new Hotel(null,"Cowboy's rest","555 666 333","432 Burger Street","4 stars",980,99.99,"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/New_York_Hotel_153-155_George_Street%2C_The_Rocks.jpg/800px-New_York_Hotel_153-155_George_Street%2C_The_Rocks.jpg",null,newyork));
		this.hotelService.addHotel(new Hotel(null,"Gentleman & Cie","55904339","20 Baker Street","5 stars",3,100,"https://th.bing.com/th/id/R.d7691b6934b096b015b64cf01e9c0d38?rik=hgWD%2bDqJJlZNxw&pid=ImgRaw&r=0",null,london));
		this.hotelService.addHotel(new Hotel(null,"Amour, gloire et beauté","0613204496","Ici c'est Paris","5 stars",41,1199.99,"https://www.e-architect.com/wp-content/uploads/2018/08/lutetia-hotel-paris-building-t220818-4.jpg",null,paris));
	}
}
