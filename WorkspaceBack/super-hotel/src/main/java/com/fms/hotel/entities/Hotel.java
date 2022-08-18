package com.fms.hotel.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Hotel implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String phone;
    private String address;
    private String rating;
    private int availableRooms;
    private double price;

    private String picture;

    @OneToOne
    private Image imageModel;
    @ManyToOne()
    private City city;

    public void setImage(Image image) {
        this.imageModel = image;
    }
}