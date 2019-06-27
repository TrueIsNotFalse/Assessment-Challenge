#!/usr/bin/env python3
"""
Reason Class from model Module
"""

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from uuid import uuid4, UUID
import json
import os

Base = declarative_base()


# Model
class Reason(Base):
    """Reason class handles all application reasons"""

    __tablename__ = 'reasons'
    id = Column(Integer, nullable=False, primary_key=True)
    created_at = Column(DateTime, nullable=False, default=datetime.utcnow)
    name = Column(String(60), nullable=True)
    reason = Column(String(3000), nullable=False)

    def __repr__(self):
            """Str representation of object"""

            return "<Reason(name='{}', reason='{}', created_at='{}')>".\
                format(self.name, self.reason, self.created_at)
