package controller

import (
	"github.com/asaskevich/govalidator"

	"github.com/sut65/team03/entity"
	"golang.org/x/crypto/bcrypt"

	"github.com/gin-gonic/gin"

	"net/http"
)

//RoomType...................................................................
// POST /RoomTypes

func CreateRoomType(c *gin.Context) {

	var roomtype entity.RoomType

	if err := c.ShouldBindJSON(&roomtype); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := entity.DB().Create(&roomtype).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": roomtype})

}

// GET /roomtype/:id
func GetRoomType(c *gin.Context) {

	var roomtype entity.RoomType

	id := c.Param("id")

	if err := entity.DB().Raw("SELECT * FROM room_types WHERE id = ?", id).Scan(&roomtype).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": roomtype})
}

// GET /roomtypes
func ListRoomTypes(c *gin.Context) {

	var roomtypes []entity.RoomType

	if err := entity.DB().Raw("SELECT * FROM room_types").Scan(&roomtypes).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": roomtypes})
}

// DELETE /roomtypes/:id
func DeleteRoomType(c *gin.Context) {

	id := c.Param("id")

	if tx := entity.DB().Exec("DELETE FROM room_types WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "roomtype not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /roomtypes
func UpdateRoomType(c *gin.Context) {

	var roomtype entity.RoomType

	if err := c.ShouldBindJSON(&roomtype); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if tx := entity.DB().Where("id = ?", roomtype.ID).First(&roomtype); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "roomtype not found"})
		return
	}

	if err := entity.DB().Save(&roomtype).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": roomtype})
}

//RoomZone...................................................................
// POST /RoomZones

func CreateRoomZone(c *gin.Context) {

	var roomzone entity.RoomZone

	if err := c.ShouldBindJSON(&roomzone); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := entity.DB().Create(&roomzone).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": roomzone})

}

// GET /RoomZone/:id
func GetRoomZone(c *gin.Context) {

	var roomzone entity.RoomZone

	id := c.Param("id")

	if err := entity.DB().Raw("SELECT * FROM room_zones WHERE id = ?", id).Scan(&roomzone).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": roomzone})
}

// GET /RoomZones
func ListRoomZones(c *gin.Context) {

	var roomzones []entity.RoomZone

	if err := entity.DB().Raw("SELECT * FROM room_zones").Scan(&roomzones).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": roomzones})
}

// DELETE /RoomZones/:id
func DeleteRoomZone(c *gin.Context) {

	id := c.Param("id")

	if tx := entity.DB().Exec("DELETE FROM room_zones WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "roomzone not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /RoomZones
func UpdateRoomZone(c *gin.Context) {

	var roomzone entity.RoomZone

	if err := c.ShouldBindJSON(&roomzone); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if tx := entity.DB().Where("id = ?", roomzone.ID).First(&roomzone); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "roomzone not found"})
		return
	}

	if err := entity.DB().Save(&roomzone).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": roomzone})
}

//State...................................................................
// POST /States

func CreateState(c *gin.Context) {

	var state entity.State

	if err := c.ShouldBindJSON(&state); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := entity.DB().Create(&state).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": state})
}

// GET /State/:id
func GetState(c *gin.Context) {

	var state entity.State

	id := c.Param("id")

	if err := entity.DB().Raw("SELECT * FROM states WHERE id = ?", id).Scan(&state).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": state})
}

// GET /States
func ListStates(c *gin.Context) {

	var states []entity.State

	if err := entity.DB().Raw("SELECT * FROM states").Scan(&states).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": states})
}

// DELETE /States/:id
func DeleteState(c *gin.Context) {

	id := c.Param("id")

	if tx := entity.DB().Exec("DELETE FROM states WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "state not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /States
func UpdateState(c *gin.Context) {

	var state entity.State

	if err := c.ShouldBindJSON(&state); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if tx := entity.DB().Where("id = ?", state.ID).First(&state); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "state not found"})
		return
	}

	if err := entity.DB().Save(&state).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": state})
}

// Room...................................................................
// POST /Rooms
func SetupPasswordHash(pwd string) string {
	var password, _ = bcrypt.GenerateFromPassword([]byte(pwd), 14)
	return string(password)
}

func CreateRoom(c *gin.Context) {

	var employee entity.Employee
	var roomtype entity.RoomType
	var roomzone entity.RoomZone
	var state entity.State
	var room entity.Room

	if err := c.ShouldBindJSON(&room); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// แทรกการ validate ไว้ช่วงนี้ของ controller
	if _, err := govalidator.ValidateStruct(room); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// 9.  ค้นหา Employee ด้วย id
	if tx := entity.DB().Where("id = ?", room.EmployeeID).First(&employee); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "employee not found"})
		return
	}

	// 10. ค้นหา RoomType ด้วย id
	if tx := entity.DB().Where("id = ?", room.RoomTypeID).First(&roomtype); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "roomtype not found"})
		return
	}

	// 11. ค้นหา RoomZone ด้วย id
	if tx := entity.DB().Where("id = ?", room.RoomZoneID).First(&roomzone); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "roomzone not found"})
		return
	}

	// 12. ค้นหา State ด้วย id
	if tx := entity.DB().Where("id = ?", room.StateID).First(&state); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "state not found"})
		return
	}

	// 13. สร้าง Room
	rr := entity.Room{
		Employee: employee,
		RoomType: roomtype,
		RoomZone: roomzone,
		State:    state,
		Room_No:  room.Room_No,
		Amount:   room.Amount,
		Time:     room.Time,
	}

	if err := entity.DB().Create(&rr).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": rr})
}

// GET /Room/:id
func GetRoom(c *gin.Context) {

	var room entity.Room

	id := c.Param("id")

	if err := entity.DB().Raw("SELECT * FROM rooms WHERE id = ?", id).Scan(&room).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": room})
}

// GET /Rooms
func ListRooms(c *gin.Context) {

	var rooms []entity.Room

	if err := entity.DB().Preload("Employee").Preload("RoomType").Preload("RoomZone").Preload("State").Raw("SELECT * FROM rooms").Find(&rooms).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": rooms})
}

// DELETE /Rooms/:id
func DeleteRoom(c *gin.Context) {

	id := c.Param("id")

	if tx := entity.DB().Exec("DELETE FROM rooms WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "room not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PUT Room
func UpdateRoom(c *gin.Context) {
	var room entity.Room
	var ro entity.Room

	if err := c.ShouldBindJSON(&room); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// ค้นหา Room ด้วย ID
	if tx := entity.DB().Where("id = ?", room.ID).First(&ro); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Room not found"})
		return
	}

	var roomtype entity.RoomType
	var roomzone entity.RoomZone
	var state entity.State

	// ค้นหา roomtype ด้วย id
	if tx := entity.DB().Where("id = ?", room.RoomTypeID).First(&roomtype); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "RoomType not found"})
		return
	}

	// ค้นหา roomzone ด้วย id
	if tx := entity.DB().Where("id = ?", room.RoomZoneID).First(&roomzone); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "RoomZone not found"})
		return
	}

	// ค้นหา state ด้วย id
	if tx := entity.DB().Where("id = ?", room.StateID).First(&state); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "State not found"})
		return
	}

	ro.RoomType = roomtype
	ro.RoomZone = roomzone
	ro.State = state
	ro.Amount = room.Amount
	//ro.Time = room.Time

	if err := entity.DB().Save(&ro).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": ro})
}
