import React from 'react';
import { Form, Input, Button } from 'antd';
import { DeleteFilled } from '@ant-design/icons';
// import { MinusCircleOutlined } from '@ant-design/icons';

const QuestionForm = ({ isContext, activeQuestions, stateHandler }) => {
  // local questions state
  // const [questions, setQuestions] = useState(activeQuestions);
  // click handler function for updating questions
  const handleClick = updateQuestions => {
    stateHandler(
      isContext ? 'leaderQuestions' : 'memberQuestions',
      updateQuestions
    );
  };
  const inputChange = e => {
    const id = e.target.id;
    const val = e.target.value;
    const updateQuestions = [...activeQuestions];
    const newQuestion = {
      ...updateQuestions[id - 1],
      body: val,
    };
    updateQuestions[id - 1] = newQuestion;
    stateHandler(
      isContext ? 'leaderQuestions' : 'memberQuestions',
      updateQuestions
    );
  };
  return (
    // antd form component
    <Form name="question-form" layout="vertical" labelAlign="left">
      {/* map through questions and make a form item for each one */}
      {activeQuestions.map((question, index) => (
        <Form.Item key={index}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingBottom: '2%',
            }}
          >
            <label
              htmlFor={question.id}
              style={{ textAlign: 'left' }}
            >{`Question ${index + 1}`}</label>
            <DeleteFilled
              style={{ margin: '0 8px' }}
              onClick={() => {
                handleClick(activeQuestions.filter((testQ, i) => i !== index));
              }}
            />
          </div>
          <Input
            id={question.id}
            value={question.body}
            onChange={inputChange}
            maxLength={20}
            size="large"
            style={{ textAlign: 'left' }}
          />
          {/* antd minus sign icon with click handler to delete the question it's attached to */}
          {/* <DeleteFilled
            style={{ margin: '0 8px' }}
            onClick={() => {
              handleClick(activeQuestions.filter((testQ, i) => i !== index));
            }}
          /> */}
        </Form.Item>
      ))}
      {/* button to add a new question */}
      {/* <Form.Item>
        <Button
          type="primary"
          onClick={() => {
            handleClick([
              ...activeQuestions,
              {
                id:
                  activeQuestions.length > 0
                    ? activeQuestions[activeQuestions.length - 1].id + 1
                    : 1,
                type: 'text',
                body: 'New Question',
              },
            ]);
          }}
        >
          add
        </Button>
      </Form.Item> */}
    </Form>
  );
};

export default QuestionForm;
