const assert = require('assert');

const { findUserById, findUserByEmail } = require('../async');

describe('The async tests', () => {

  describe('The findUserById function' , () => {
    it('should return found user data by id', () => {

      return findUserById(1).then(result => {

        assert.equal(result.user.name, 'bahdcoder');

      })
    });

    it('should throw an error if user was not found', () => {

      return findUserById(90393).catch(error => {

        assert.equal(error.message, 'User with id: 90393 was not found.');

      })
    });

    it('should return user found by id', async () => {

      const result = await findUserById(1);

      assert.equal(result.user.name, 'bahdcoder');
    });


  })

  describe('The findUserByEmail function' , () => {
    it('should find user by email', () => {

      return findUserByEmail('bahdcoder@gmail.com').then(result => {

        assert.equal(result.user.id, 1);
        assert.equal(result.user.email, 'bahdcoder@gmail.com');

      })
    });

    it('should throw an error if user was not found by email', () => {

      return findUserByEmail('mark@example.com').catch(error => {

        assert.equal(error.message, 'User with email: mark@example.com was not found.');

      })
    });

  /*  it('should throw error if user was not found by email', async () => {

        try {
          await findUserByEmail('bahdcoder@gmail.com');

          assert.fail('EXPECTED_ERROR');

        } catch (error) {

          if(error.message === 'EXPECTED_ERROR'){
            throw error;
          }

          assert.equal(error.message, 'User with email: bahd@gmail.com was not found.');
        }
    }); */

  })

})
