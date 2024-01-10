package entity

import (
	"time"

	"gorm.io/gorm"
)

type Food struct {
	gorm.Model
	Name    string
	Price   int
	Item    int
	Service []Service `gorm:"foreignKey:FoodID"`
}

type Drink struct {
	gorm.Model
	Name    string
	Price   int
	Item    int
	Service []Service `gorm:"foreignKey:DrinkID"`
}

// หลัก 1.
type Service struct {
	gorm.Model
	Time        time.Time
	CustomerID  int      `valid:"required~Please Login"`
	Customer    Customer `valid:"-" gorm:"references:id"`
	FoodID      int      `valid:"required~Choose Food"`
	Food        Food     `gorm:"references:id"`
	FoodItem    int      `valid:"range(0|50)~How much food do you want?"`
	DrinkID     int      `valid:"required~Choose Drink"`
	Drink       Drink    `gorm:"references:id"`
	DrinkItem   int      `valid:"range(0|50)~How much drink do you want?"`
	StorageID   int      `valid:"required~Choose Accessories"`
	Storage     Storage  `valid:"-" gorm:"references:id"`
	StorageItem int      `valid:"range(0|50)~How much accessories do you want?"`
	Total       int
}
