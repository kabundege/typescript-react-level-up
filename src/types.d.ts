interface Todo {
    text: string,
    completed: boolean
}


type Toggle = (todo:Todo) => void;
