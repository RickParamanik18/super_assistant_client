import { Button, Divider, Modal } from "antd";
import { Comprehension } from "../FormInputs/Comprehension/Comprehension";
import { Categorize } from "../FormInputs/Categorize/Categorize";
import { Cloze } from "../FormInputs/Cloze/Cloze";

export const AddInputModal = ({
    title = "",
    open = false,
    setOpen,
    setFormInputs,
}) => {
    const addInput = (inputType) => {
        if (inputType === "categorize") {
            setFormInputs((prev) => [...prev, <Categorize />]);
        } else if (inputType === "cloze") {
            setFormInputs((prev) => [...prev, <Cloze />]);
        } else if (inputType == "comprehension") {
            setFormInputs((prev) => [...prev, <Comprehension />]);
        }
        setOpen(false);
    };

    return (
        <Modal
            title={title}
            open={open}
            onCancel={() => setOpen(false)}
            footer={null}
        >
            <Divider />
            <Button onClick={() => addInput("categorize")}>Categorize</Button>
            &nbsp;
            <Button onClick={() => addInput("cloze")}>Cloze</Button>
            &nbsp;
            <Button onClick={() => addInput("comprehension")}>
                Comprehension
            </Button>
        </Modal>
    );
};
