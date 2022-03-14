import React, {useEffect, useState} from "react";
import NavItem from "../components/NavItem";
import {ITaskNavItem} from "../types/types";
import {requestToServer} from "../axios/requests";

const TasksNav: React.FC = () => {

    const [tasksNavData, setTasksNavData] = useState<ITaskNavItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        requestToServer(setTasksNavData, setIsLoading, setErrorMessage, '').then(data => console.log(data));
    }, []);

    return (
        <div className="container">
            <nav className="nav flex-column">
                {
                    tasksNavData.map(taskNavItem => (
                        <NavItem to={`calculator/${taskNavItem.type}`} key={taskNavItem.id}>{taskNavItem.title}</NavItem>
                    ))
                }
            </nav>
        </div>
    );
}

export default TasksNav;