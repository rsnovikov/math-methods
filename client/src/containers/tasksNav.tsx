import React, {FC, useEffect, useState} from "react";
import NavItem from "../components/navItem";
import {ITaskNavItem} from "../types/types";
import {requestToServer} from "../axios/requests";
import LoadingAndError from "../hoc/loadingAndError";

const TasksNav: FC = () => {

    const [tasksNavData, setTasksNavData] = useState<ITaskNavItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        requestToServer(setTasksNavData, setIsLoading, setErrorMessage, '');
    }, []);

    return (
        <div className="container">
            <LoadingAndError isLoading={isLoading} errorMessage={errorMessage}>
                <nav className="nav flex-column">
                    {
                        tasksNavData.map(taskNavItem => (
                            <NavItem to={`calculator/${taskNavItem.type}`}
                                     key={taskNavItem.id}>{taskNavItem.title}</NavItem>
                        ))
                    }
                </nav>
            </LoadingAndError>
        </div>
    );
}

export default TasksNav;