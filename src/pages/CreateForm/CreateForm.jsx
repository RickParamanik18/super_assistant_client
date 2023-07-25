import { Button, Divider, Input, Tooltip } from "antd";
import styled from "../CreateForm/createform.module.css";
import TextArea from "antd/es/input/TextArea";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { AddInputModal } from "../../components/AddInputModal/AddInputModal";

export const CreateForm = () => {
    const [showAddInputField, setShowAddInputField] = useState(false);
    const [formInputs, setFormInputs] = useState([]);
    const addInputFieldHandler = (val = null) => {
        if (val != null) {
            setShowAddInputField(val);
        } else {
            setShowAddInputField((prev) => !prev);
        }
    };

    return (
        <div className={styled.container}>
            <div className={styled.formContainer}>
                <div className={styled.formDetails}>
                    <Input size="large" defaultValue={"This is a Title"} />
                    <TextArea
                        size="large"
                        rows={3}
                        defaultValue={"This is Desc"}
                    />
                </div>
                <Divider />
                <div className={styled.formInputsContainer}>{formInputs}</div>
                <div className={styled.addButtonContainer}>
                    <Tooltip title="Add Fields">
                        <Button
                            type="primary"
                            shape="circle"
                            icon={<PlusOutlined />}
                            size={"large"}
                            onClick={addInputFieldHandler}
                        />
                    </Tooltip>
                </div>
                <AddInputModal
                    title={"Select input"}
                    open={showAddInputField}
                    setOpen={setShowAddInputField}
                    setFormInputs={setFormInputs}
                />
            </div>
        </div>
    );
};
