from django.db import models

class TestTable(models.Model):
    name = models.CharField(max_length=255)
    age = models.IntegerField(null=True, blank=True)
    email = models.CharField(max_length=255)

    class Meta:
        db_table = 'test_table'

    def __str__(self):
        return self.name
