import { StorageInterface } from "../../../models/IStorage";
import { DrinksInterface, FoodsInterface, ServicesInterface } from "../../../models/modelService/IService";

const apiUrl = "http://localhost:8080";

async function AddService(data: ServicesInterface) {
    const requestOptions = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };
    let res = await fetch(`${apiUrl}/service`, requestOptions)
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                return { status: true, message: res.data };
            } else {
                return { status: false, message: res.error };
            }
        });
    return res;
}

async function UpdateService(data: ServicesInterface) {
    const requestOptions = {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }
    let res = await fetch(`${apiUrl}/services`, requestOptions)
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                return { status: true, message: res.data };
            } else {
                return { status: false, message: res.error };
            }
        });
    return res;
}

async function DeleteService(id?: null | number) {
    const requestOptions = {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
        },
    };
    let res = await fetch(`${apiUrl}/services/${id}`, requestOptions)
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                return { status: true, message: res.data };
            } else {
                return { status: false, message: res.error };
            }
        });
    return res;
}
const requestOptionsGet = {
    method: "GET",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
    },
}
async function GetServiceByID(id?: string) {
    let res = await fetch(`${apiUrl}/service/${id}`, requestOptionsGet)
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                return res.data;
            } else {
                return false;
            }
        });
    return res;
}
async function GetServiceByIDn(id?: number) {
    let res = await fetch(`${apiUrl}/service/${id}`, requestOptionsGet)
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                return res.data;
            } else {
                return false;
            }
        });
    return res;
}
async function GetService(id: string) {
    let res = await fetch(`${apiUrl}/services/customer/${id}`, requestOptionsGet)
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                return res.data;
            } else {
                return false;
            }
        });
    return res;
}
async function GetFoodItemS(id?: string) {
    let res = await fetch(`${apiUrl}/service/${id}`, requestOptionsGet)
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                return res.data.FoodItem;
            } else {
                return false;
            }
        });
    return res;
}
async function GetDrinkItemS(id?: string) {
    let res = await fetch(`${apiUrl}/service/${id}`, requestOptionsGet)
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                return res.data.DrinkItem;
            } else {
                return false;
            }
        });
    return res;
}
async function GetAccessoriesItemS(id?: string) {
    let res = await fetch(`${apiUrl}/service/${id}`, requestOptionsGet)
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                return res.data.StorageItem;
            } else {
                return false;
            }
        });
    return res;
}
async function GetFoodItemSn(id?: number) {
    let res = await fetch(`${apiUrl}/service/${id}`, requestOptionsGet)
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                return res.data.FoodItem;
            } else {
                return false;
            }
        });
    return res;
}
async function GetDrinkItemSn(id?: number) {
    let res = await fetch(`${apiUrl}/service/${id}`, requestOptionsGet)
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                return res.data.DrinkItem;
            } else {
                return false;
            }
        });
    return res;
}
async function GetAccessoriesItemSn(id?: number) {
    let res = await fetch(`${apiUrl}/service/${id}`, requestOptionsGet)
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                return res.data.StorageItem;
            } else {
                return false;
            }
        });
    return res;
}

async function GetFoods() {
    let res = await fetch(`${apiUrl}/foods`, requestOptionsGet)
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                return res.data;
            } else {
                return false;
            }
        });
    return res;
}
async function GetFoodItem(id?: number) {
    let res = await fetch(`${apiUrl}/food/item/${id}`, requestOptionsGet)
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                return res.data.Item;
            } else {
                return false;
            }
        });
    return res;
}
async function UpdateFood(data: FoodsInterface) {
    const requestOptions = {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }

    let res = await fetch(`${apiUrl}/foods`, requestOptions)
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                return res.data;
            } else {
                return false;
            }
        });
    return res;
}

async function GetDrinks() {
    let res = await fetch(`${apiUrl}/drinks`, requestOptionsGet)
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                return res.data;
            } else {
                return false;
            }
        });
    return res;
}
async function GetDrinkItem(id?: number) {
    let res = await fetch(`${apiUrl}/drink/item/${id}`, requestOptionsGet)
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                return res.data.Item;
            } else {
                return false;
            }
        });
    return res;
}
async function UpdateDrink(data: DrinksInterface) {
    const requestOptions = {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }

    let res = await fetch(`${apiUrl}/drinks`, requestOptions)
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                return res.data;
            } else {
                return false;
            }
        });
    return res;
}

async function GetAccessories() {
    let res = await fetch(`${apiUrl}/accessories`, requestOptionsGet)
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                return res.data;
            } else {
                return false;
            }
        });
    return res;
}
async function GetAccessorieItem(id?: number) {
    let res = await fetch(`${apiUrl}/accessorie/item/${id}`, requestOptionsGet)
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                return res.data.Quantity;
            } else {
                return false;
            }
        });
    return res;
}
async function UpdateAccessories(data: StorageInterface) {
    const requestOptions = {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }

    let res = await fetch(`${apiUrl}/accessories`, requestOptions)
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                return res.data;
            } else {
                return false;
            }
        });
    return res;
}

async function GetRoom(id: string | null) {
    let res = await fetch(`${apiUrl}/room/customer/${id}`, requestOptionsGet)
    .then((response) => response.json())
    .then((res) => {
        if (res.data) {
            return res.data.Room_No;
        } else {
            return false;
        }
    });
    return res;
}
async function GetPriceFood(id?: number) {
    let res = await fetch(`${apiUrl}/food/price/${id}`, requestOptionsGet)
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                return res.data.Price;
            } else {
                return false;
            }
        });
    return res;
}
async function GetPriceDrink(id?: number) {
    let res = await fetch(`${apiUrl}/drink/price/${id}`, requestOptionsGet)
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                return res.data.Price;
            } else {
                return false;
            }
        });
    return res;
}
async function GetPriceAccessorie(id?: number) {
    let res = await fetch(`${apiUrl}/accessorie/price/${id}`, requestOptionsGet)
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                return res.data.Price;
            } else {
                return false;
            }
        });
    return res;
}

export {
    AddService,
    UpdateService,
    DeleteService,
    GetService,
    GetServiceByID,
    GetServiceByIDn,
    GetFoodItemS,
    GetDrinkItemS,
    GetAccessoriesItemS,
    GetFoodItemSn,
    GetDrinkItemSn,
    GetAccessoriesItemSn,
    GetFoods,
    GetFoodItem,
    UpdateFood,
    GetDrinks,
    GetDrinkItem,
    UpdateDrink,
    GetAccessories,
    GetAccessorieItem,
    UpdateAccessories,
    GetRoom,
    GetPriceFood,
    GetPriceDrink,
    GetPriceAccessorie,
};