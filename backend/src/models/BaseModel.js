// Base model class for database operations
class BaseModel {
  constructor(tableName) {
    this.tableName = tableName;
  }

  // Placeholder methods - to be implemented in specific models
  async findAll(options = {}) {
    throw new Error('findAll method not implemented');
  }

  async findById(id) {
    throw new Error('findById method not implemented');
  }

  async create(data) {
    throw new Error('create method not implemented');
  }

  async update(id, data) {
    throw new Error('update method not implemented');
  }

  async delete(id) {
    throw new Error('delete method not implemented');
  }
}

module.exports = BaseModel;