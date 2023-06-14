from typing import Optional

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}

students = {
    1: {
        "name": "john",
        "age": 17,
        "class": "year 12"
    }
}

@app.get("/get-student/{student_id}")
def get_student(student_id: int):
    return students[student_id]