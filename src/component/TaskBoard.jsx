import React from 'react';
import Column from './column';
import './TaskBoard.css';

function TaskBoard() {
    const tasks = [
      {
        clientName: 'Client Name',
        assigneeImage: 'https://placehold.co/30x30',
        assigneeName: 'Sadik Istiak',
        description: 'Lorem ipsum dolor sit amet...',
        layerGroup: '12+',
        comments: 15,
        tasks: 25,
        date: '30-12-2022',
        attachments: [
          { name: 'Document 1', url: '#' },
          { name: 'Document 2', url: '#' },
        ],
      },
      {
        clientName: 'Client Name',
        assigneeImage: 'https://placehold.co/30x30',
        assigneeName: 'Sadik Istiak',
        description: 'Lorem ipsum dolor sit amet...',
        layerGroup: '12+',
        comments: 15,
        tasks: 25,
        date: '30-12-2022',
        attachments: [
          { name: 'Document 1', url: '#' },
          { name: 'Document 2', url: '#' },
        ],
      },
      {
        clientName: 'Client Name',
        assigneeImage: 'https://placehold.co/30x30',
        assigneeName: 'Sadik Istiak',
        description: 'Lorem ipsum dolor sit amet...',
        layerGroup: '12+',
        comments: 15,
        tasks: 25,
        date: '30-12-2022',
        attachments: [
          { name: 'Document 1', url: '#' },
          { name: 'Document 2', url: '#' },
        ],
      },
      {
        clientName: 'Client Name',
        assigneeImage: 'https://placehold.co/30x30',
        assigneeName: 'Sadik Istiak',
        description: 'Lorem ipsum dolor sit amet...',
        layerGroup: '12+',
        comments: 15,
        tasks: 25,
        date: '30-12-2022',
        attachments: [
          { name: 'Document 1', url: '#' },
          { name: 'Document 2', url: '#' },
        ],
      },
      
    ];
  
    return (
      <div className="board">
        <Column title="Incomplete" className="incomplete" tasks={tasks} />
        <Column title="To Do" className="todo" tasks={tasks} />
        <Column title="Doing" className="doing" tasks={tasks} />
        <Column title="Completed" className="completed" tasks={tasks} />
      </div>
    );
  }
  
  export default TaskBoard;
