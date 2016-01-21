import {expect} from 'chai';

import * as Todos from '../../src/actions/Todos';
import * as Types from '../../src/constants/ActionTypes';

describe('Todo actions', () => {
  describe('addTodo', () => {
    it(`returns an FSA with type ${Types.ADD_TODO}`, () => {
      expect(Todos.addTodo().type).to.equal(Types.ADD_TODO);
    });
    it('returns an FSA with the passed text', () => {
      const text = 'foo';
      expect(Todos.addTodo(text).text).to.equal(text);
    });
  });
  describe('deleteTodo', () => {
    it(`returns an FSA with type ${Types.DELETE_TODO}`, () => {
      expect(Todos.deleteTodo().type).to.equal(Types.DELETE_TODO);
    });
    it('returns an FSA with the passed id', () => {
      const id = 'foo';
      expect(Todos.deleteTodo(id).id).to.equal(id);
    });
  });
  describe('editTodo', () => {
    it(`returns an FSA with type ${Types.EDIT_TODO}`, () => {
      expect(Todos.editTodo().type).to.equal(Types.EDIT_TODO);
    });
    it('returns an FSA with the passed id', () => {
      const id = 'foo';
      const text = 'bar';
      expect(Todos.editTodo(id, text).id).to.equal(id);
    });
    it('returns an FSA with the passed text', () => {
      const id = 'foo';
      const text = 'bar';
      expect(Todos.editTodo(id, text).text).to.equal(text);
    });
  });
  describe('completeTodo', () => {
    it(`returns an FSA with type ${Types.COMPLETE_TODO}`, () => {
      expect(Todos.completeTodo().type).to.equal(Types.COMPLETE_TODO);
    });
    it('returns an FSA with the passed id', () => {
      const id = 'foo';
      const text = 'bar';
      expect(Todos.completeTodo(id).id).to.equal(id);
    });

  });
  describe('completeAll', () => {
    it(`returns an FSA with type ${Types.COMPLETE_ALL}`, () => {
      expect(Todos.completeAll().type).to.equal(Types.COMPLETE_ALL);
    });
  });
  describe('clearCompleted', () => {
    it(`returns an FSA with type ${Types.CLEAR_COMPLETED}`, () => {
      expect(Todos.clearCompleted().type).to.equal(Types.CLEAR_COMPLETED);
    });
  });
});
